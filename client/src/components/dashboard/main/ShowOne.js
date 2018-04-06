import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowOne extends Component {
	render() {
		return (
			<div className="row">
				<div
					role="show one container"
					className="col-12"
					style={{
						padding: '0',

						minHeight: '216px',

						maxHeight: '350px'
					}}
				>
					<div
						role="left edge"
						style={{
							display: 'inline-block',
							height: '100%',
							width: '30px',
							backgroundColor: 'black',
							float: 'left'
						}}
					/>
					<div
						role="poster column in show one div"
						style={{
							display: 'inline-block',
							verticalAlign: 'top',
							width: '20%',
							minWidth: '141px',
							maxWidth: '175px',
							float: 'left'
						}}
					>
						<div
							role="top"
							style={{
								width: '100%',
								height: '20px',
								backgroundColor: 'black'
							}}
						/>

						<img
							src="https://ia.media-imdb.com/images/M/MV5BYmM0ZGUyM2QtZTgxNS00M2EwLWIxZGYtZWI5NzU4ZTRkZDc4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,668,1000_AL_.jpg"
							style={{
								width: '96%',
								margin: '3px',
								border: 'solid black 8px'
							}}
						/>

						<div
							role="bottom"
							style={{
								width: '100%',
								height: '20px',
								backgroundColor: 'black'
							}}
						/>
					</div>
					<div
						style={{
							backgroundColor: 'black',
							verticalAlign: 'top',
							height: '100%',
							overflow: 'hidden'
						}}
					/>
				</div>
			</div>
		);
	}
}

{
	/* <div
    role="picture width container"
    style={{
        position: 'absolute',
        width: '34.15%',
        paddingTop: '65.8536%',
        height:'100%',



        backgroundColor: 'yellow'
    }}
/> */
}
export default ShowOne;
