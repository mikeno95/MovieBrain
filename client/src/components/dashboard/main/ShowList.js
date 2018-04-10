import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import Switch from "react-switch";
import * as sortBy from "../../../util/sorting";

class ShowList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      showList: [],
      desc: true,
      currentSort: "popularity"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    // if (this.state.showList.length == 0){
    //   await this.props.searchMovie({searchTerm: "flubber", media: "movie", searchIteration: 0});
    //   this.setState({showList: this.props.searchResults})
    // }

  }
  async componentWillReceiveProps(nextProps) {
    console.log("component will recieve props")
    if(this.props.searchTerm!==nextProps.searchTerm) {
      await this.props.searchMovie({searchTerm: nextProps.searchTerm, media: "movie", searchIteration: 0});
      this.setState({showList: sortBy.popularity(this.props.searchResults)});
    }
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  renderResults() {
    if(this.state.showList.length==0) {
      return;
    } else {
      console.log('showlist: ', this.state.showList)
      return this.state.showList.map(
        ({ Title, Year, Runtime, Director, Ratings, imdbVotes }, idx) => {
          let seenCell = "unseen";
          let RottenTomato = "N/A";
          let imdbRating = "N/A";
          Ratings.map( rating => {
            if(rating.Source=="Rotten Tomatoes") {
              RottenTomato = rating.Value;
            } else if (rating.Source=="Internet Movie Database") {
              imdbRating = rating.Value;
            }
          });
          // if (seen) {
          //   seenCell = "seen";
          // }
          return (
            <tr
              id="resultItem"
              onClick={() => {this.props.onSelected(this.state.showList[idx])}}
            >
              <td>{imdbVotes}</td>
              <td>{Title}</td>
              <td>{Director}</td>
              <td>{Year}</td>
              <td>{Runtime}</td>
              <td>{RottenTomato}</td>
              <td>{imdbRating}</td>
              <td>...</td>
            </tr>
          );
        }
      );
    }

  }


  sortList(currentSort, sortFunction){
    if (this.state.currentSort !== currentSort){
      this.setState((prevState) => { return {currentSort , desc:true, showList: sortFunction(prevState.showList)}});
    }
    else if (this.state.desc){
      this.setState((prevState) => { return {desc: false, showList: sortFunction(prevState.showList, !prevState)}});
    }
    else if (!this.state.desc) {
      this.setState((prevState) => { return { showList: sortBy.popularity(prevState.showList), desc: true, currentSort: "popularity"}})
    }
  }


  render() {
    let placeHolder = <i className="material-icons" style={{color: "black"}}>arrow_drop_down</i>
    let sortArrow = <i className="material-icons">arrow_drop_up</i>;
    if(this.state.desc) {
      sortArrow = <i className="material-icons">arrow_drop_down</i>;
    }

    return (
      <div className="row" id="ShowComponent">
        <div className="col-12" id="ShowHeader">
          <h3>Collection Name</h3>{" "}
          <label className="float-right" style={{marginTop: "5px"}} htmlFor="normal-switch">
            <span id="toggleLabel" className={this.state.checked ? "active" : ""}>Seen</span>
            <Switch
              checked={this.state.checked}
              onChange={this.handleChange}
              onColor="#60078e"
              onHandleColor="#ef459b"
              handleDiameter={25}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(255, 177, 0, 0.15)"
              height={15}
              width={40}
              className="react-switch"
              id="material-switch"
            />
          </label>
        </div>
        <div className="col-12" id="ShowList">
          <table id="showListTable">
            <thead>
              <tr>
                <th />
                <th onClick={() => this.sortList("title", sortBy.title)}>Title<span id="arrow">{this.state.currentSort=="title" ? sortArrow:placeHolder}</span></th>
                <th onClick={() => this.sortList("director", sortBy.director)}>Director<span id="arrow">{this.state.currentSort=="director" ? sortArrow:placeHolder}</span></th>
                <th onClick={() => this.sortList("year", sortBy.year)}>Year<span id="arrow">{this.state.currentSort=="year" ? sortArrow:placeHolder}</span></th>
                <th onClick={() => this.sortList("runtime", sortBy.runtime)}>Runtime<span id="arrow">{this.state.currentSort=="runtime" ? sortArrow:placeHolder}</span></th>
                <th onClick={() => this.sortList("rotten tomatoes", sortBy.rottentomato)}>RT<span id="arrow">{this.state.currentSort=="rotten tomatoes" ? sortArrow:placeHolder}</span></th>
                <th onClick={() => this.sortList("imdb", sortBy.imdb)}>IMDB<span id="arrow">{this.state.currentSort=="imdb"? sortArrow:placeHolder}</span></th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {this.renderResults()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps({searchResults}) {
  return {searchResults};
}

export default connect(mapStateToProps, actions)(ShowList);
