import React, { Component } from 'react';
import { connect } from 'react-redux';

var MovieArray = [
	{
		title: 'James Bone',
		seen: true,
		year: 1969,
		genre: 'Action',
		runTime: '2:30',
		RottenTomato: '90%',
		IMDB: '7.7'
	},
	{
		title: 'James Bone',
		seen: true,
		year: 1969,
		genre: 'Action',
		runTime: '2:30',
		RottenTomato: '90%',
		IMDB: '7.7'
	},
	{
		title: 'James Bone',
		seen: true,
		year: 1969,
		genre: 'Action',
		runTime: '2:30',
		RottenTomato: '90%',
		IMDB: '7.7'
	},
	{
		title: 'James Bone',
		seen: true,
		year: 1969,
		genre: 'Action',
		runTime: '2:30',
		RottenTomato: '90%',
		IMDB: '7.7'
	},
	{
		title: 'James Bone',
		seen: true,
		year: 1969,
		genre: 'Action',
		runTime: '2:30',
		RottenTomato: '90%',
		IMDB: '7.7'
	},
	{
		title: 'James Bone',
		seen: true,
		year: 1969,
		genre: 'Action',
		runTime: '2:30',
		RottenTomato: '90%',
		IMDB: '7.7'
	},
	{
		title: 'James Bone',
		seen: true,
		year: 1969,
		genre: 'Action',
		runTime: '2:30',
		RottenTomato: '90%',
		IMDB: '7.7'
	},
	{
		title: 'James Bone',
		seen: true,
		year: 1969,
		genre: 'Action',
		runTime: '2:30',
		RottenTomato: '90%',
		IMDB: '7.7'
	},
	{
		title: 'James Bone',
		seen: true,
		year: 1969,
		genre: 'Action',
		runTime: '2:30',
		RottenTomato: '90%',
		IMDB: '7.7'
	},
	{
		title: 'James Bone',
		seen: true,
		year: 1969,
		genre: 'Action',
		runTime: '2:30',
		RottenTomato: '90%',
		IMDB: '7.7'
	},
	{
		title: 'James Bone',
		seen: true,
		year: 1969,
		genre: 'Action',
		runTime: '2:30',
		RottenTomato: '90%',
		IMDB: '7.7'
	},
	{
		title: 'James Bone',
		seen: true,
		year: 1969,
		genre: 'Action',
		runTime: '2:30',
		RottenTomato: '90%',
		IMDB: '7.7'
	},
	{
		title: 'James Bone Last One',
		seen: true,
		year: 1969,
		genre: 'Action',
		runTime: '2:30',
		RottenTomato: '90%',
		IMDB: '7.7'
	}
];

class ShowList extends Component {
	renderResults() {
		return MovieArray.map( ({seen, title, year, genre, runTime, RottenTomato, IMDB}) => {
			let seenCell = "unseen";
			if(seen) {
				seenCell = "seen";
			}
			return (
				<tr id="resultItem">
					<td>{seenCell}</td>
					<td>{title}</td>
					<td>{year}</td>
					<td>{genre}</td>
					<td>{runTime}</td>
					<td>{RottenTomato}</td>
					<td>{IMDB}</td>
					<td>...</td>
				</tr>
			)
		})
	}

	render() {
		return (
			<div className="row">
				<div className="col-12" style={{backgroundColor: "black", borderBottom: "1.5px solid #303030", marginTop: "5px", paddingTop:'10px'}}><h3 style={{ display: 'inline-block', color: "#CE6C80" }}>Collection Name</h3></div>
				<div className="col-12" id="ShowList">


					<table id="showListTable" style={{color: "#e2cfe2"}}>
						<thead>
							<tr style={{fontSize: "1.2rem"}}>
								<th />
								<th>Title</th>
								<th>Year</th>
								<th>Genre</th>
								<th>RunTime</th>
								<th>RT</th>
								<th>IMDB</th>
								<th>Options</th>
							</tr>
						</thead>
						<tbody>
							{this.renderResults()}
							{this.renderResults()}
							{this.renderResults()}
							{this.renderResults()}
						</tbody>

					</table>
				</div>
			</div>

		);
	}
}

export default ShowList;
