import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowOne from "./ShowOne";
import ShowList from "./ShowList";

class Main extends Component {
    render() {
        return (
            <div style={{position: 'absolute', left: '245px', right: '20px', minWidth: '672px',  top: "0px"}}>
                <ShowOne />
                <ShowList />
                <div className="row" style={{position: 'absolute', height: "10px"}}>

    			</div>
            </div>
        );
    }
}

export default Main;
