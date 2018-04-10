
export const popularity = (arr) => {
  return arr.sort(function(a,b){
    const re = new RegExp(",", 'g');
    let objectB = parseFloat(b.imdbVotes.replace(re, "").replace("N/A", 0), 10);
    let objectA = parseFloat(a.imdbVotes.replace(re, "").replace("N/A", 0), 10);
    return objectB - objectA;
  });
}

export const title = (arr, desc = true) => {
  return arr.sort(function(a,b) {
    let objectB = b.Title.toUpperCase();
    let objectA = a.Title.toUpperCase();
    if(desc) { // (A-Z)
      if (objectA < objectB) {
        return -1;
      }
      if (objectA > objectB) {
        return 1;
      }
    } else { // (Z-A)
      if (objectA > objectB) {
        return -1;
      }
      if (objectA < objectB) {
        return 1;
      }
    }
    return 0;
  });
}

export const year = (arr, desc = true) => {
  return arr.sort(function(a,b) {
    let objectB = parseFloat(b.Year.replace("N/A", 0), 10);
    let objectA = parseFloat(a.Year.replace("N/A", 0), 10);
    return (desc) ? objectB - objectA : objectA - objectB;
  })
}

export const director = (arr, desc = true) => {
  return arr.sort(function(a,b) {
    let objectA = a.Director.replace("N/A", "zzzzzzz").split(",")[0].split(" ");
    let objectB = b.Director.replace("N/A", "zzzzzzz").split(",")[0].split(" ");
    let lastA = objectA[objectA.length-1].toUpperCase();
    let lastB = objectB[objectB.length-1].toUpperCase();
    if(desc) { // (A-Z)
      if (lastA < lastB) {
        return -1;
      }
      if (lastA > lastB) {
        return 1;
      }
    } else { // (Z-A)
      if (lastA > lastB) {
        return -1;
      }
      if (lastA < lastB) {
        return 1;
      }
    }
    return 0;
  });
}

export const runtime = (arr, desc = true) => {
  return arr.sort(function(a,b){
    let objectB = parseFloat(b.Runtime.replace(" min", "").replace("N/A", 0), 10);
    let objectA = parseFloat(a.Runtime.replace(" min", "").replace("N/A", 0), 10);
    return (desc) ? objectB - objectA : objectA - objectB;

  });
}

export const rottentomato = (arr, desc = true) => {
  return arr.sort(function(a,b){
    let objectA = 0;
    let objectB = 0;
    a.Ratings.map(rating => {
      if(rating.Source=="Rotten Tomatoes"){
        objectA = parseFloat(rating.Value.replace("%", ""), 10);
      }
    });
    b.Ratings.map(rating => {
      if(rating.Source=="Rotten Tomatoes"){
        objectB = parseFloat(rating.Value.replace("%", ""), 10);
      }
    });
    return (desc) ? objectB - objectA : objectA - objectB;
  })
}

export const imdb = (arr, desc = true) => {
  return arr.sort(function(a,b){
    let objectA = parseFloat(a.imdbRating.replace("N/A", 0), 10);
    let objectB = parseFloat(b.imdbRating.replace("N/A", 0), 10);
    return (desc) ? objectB - objectA : objectA - objectB;
  })
}
