import React, { Component } from 'react';


import SearchBar from './search-bar';


export default class ForecastContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: ''
        }
    }

    componentDidMount() {

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