import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions';

import SearchBar from './search-bar';


export class ForecastContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: ''
        }
    }

    componentDidMount() {
        console.log("Mounted");
        this.props.dispatch(fetchWeather());
    }
 
    handleSubmit(e){
        e.preventDefault();
        let zipcode = e.target.location.value;
        console.log(zipcode);
        this.setState({
            zip: zipcode
        })
    }
    render() {
        return(
            <div>
                <SearchBar handleSubmit = {(e) => this.handleSubmit(e)}/>
            </div>
        );
    }
}
export default connect()(ForecastContainer);