import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions';
import '../css/search-bar.css';

export class  SearchBar extends React.Component {
    componentDidMount() {
        console.log("Mounted");
        this.props.dispatch(fetchWeather());
    }
    render() {
        return(
            <div className="search-box">
                <form className="search-form" >
                    <input type="text" name="location" placeholder="Enter city or state" />
                    <button  className="search-button">Go</button>
                </form>
            </div>
        );
    }
}
export default connect()(SearchBar);