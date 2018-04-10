const keys = require("../config/keys");
const request = require("request");

const ROOT_URL = `http://www.omdbapi.com/?apikey=${keys.omdbKey}&`;

function getIds(jsonResponse) {
  let searchResults = jsonResponse.Search;
  return searchResults.map(movie => {
    return movie.imdbID;
  });
}

exports.fetchMax50 = (req, res, next) => {
  let idArray = [];
  let media = req.body.media;
  let searchIteration = req.body.searchIteration; // 0 initial search // 1 for see 50 more
  let atPage = 1 + 5*searchIteration;
  request(`${ROOT_URL}s=${req.body.searchTerm}&type=${media}&page=${atPage}`, async (err, response, body) => {
      if (!err && response.statusCode == 200) {
        let jsonResponse = JSON.parse(body);
        let pagesPerSearch = Math.ceil((jsonResponse.totalResults - (50*searchIteration)) / 10);
        let count = 0;

        // Use for testing$$$$$$$$$$$$$$

        // idArray = getIds(jsonResponse);
        // done()

        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



        // Comment out for testing~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        if (pagesPerSearch === 1){
          idArray = getIds(jsonResponse);
          done();
        }
        else if (pagesPerSearch < 5) {
          console.log("hitting")
          idArray = getIds(jsonResponse);
          for(let i = 1; i < pagesPerSearch ; i++) {
            (function(idx){
              request(`${ROOT_URL}s=${req.body.searchTerm}&type=${media}&page=${idx + atPage}`,  async (err, response, body) => {
                if (!err && response.statusCode == 200) {
                  jsonResponse = JSON.parse(body);
                  idArray = idArray.concat(getIds(jsonResponse));
                  console.log(idArray.length)
                  count++;
                  if(count > pagesPerSearch-2) done();
                }
              });
            }(i))
          }
        } else if (pagesPerSearch >= 5) {
          idArray = getIds(jsonResponse);
          for(let i = 1; i < 5 ; i++) {
            (function(idx){
              request(`${ROOT_URL}s=${req.body.searchTerm}&type=${media}&page=${idx + atPage}`,  async (err, response, body) => {
                if (!err && response.statusCode == 200) {
                  jsonResponse = JSON.parse(body);
                  idArray = idArray.concat(getIds(jsonResponse));
                  console.log(idArray.length)
                  count++;
                  if(count > 3) done();
                }
              });
            }(i))
          }
        }

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        function done(){
          req.body = idArray;
          next();
        }
      }
    }
  );
};


exports.compileList = (req,res,next) => {
  console.log("hitting compileList")
  const idArray = req.body;
  let mediaArray = [];
  let count = 0;

  // const testArray = idArray.slice(0,3);
  // for(let element of testArray) {
  //   (function(id) {
  //     request(`${ROOT_URL}i=${id}`, (err, response, body) => {
  //       if(!err && response.statusCode == 200) {
  //         let jsonResponse = JSON.parse(body);
  //         mediaArray.push(jsonResponse);
  //         count++;
  //         if(count>testArray.length-1) done();
  //       }
  //     })
  //   }(element))
  // }
  for(let element of idArray) {
    (function(id) {
      request(`${ROOT_URL}i=${id}`, (err, response, body) => {
        if(!err && response.statusCode == 200) {
          let jsonResponse = JSON.parse(body);
          mediaArray.push(jsonResponse);
          count++;
          if(count>idArray.length-1) done();
        }
      })
    }(element))
  }
  function done() {
    res.send(mediaArray);
  }
}
