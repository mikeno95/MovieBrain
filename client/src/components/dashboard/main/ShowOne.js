import React, { Component } from 'react';
import { connect } from 'react-redux';
import Poster from "./Poster";
import SelectedResult from "./SelectedResult";

class ShowOne extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="row">
				<div
					className="col-12"
					id="ShowOne"
				>
					<div id="left-edge" />
					<Poster
						imgUrl={this.props.selectedResult.Poster}
					/>
					<SelectedResult
						selectedResult={this.props.selectedResult}
					/>
				</div>
			</div>
		);
	}
}

export default ShowOne;
