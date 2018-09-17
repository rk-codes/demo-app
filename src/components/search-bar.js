import React, { Component } from 'react';

import '../css/search-bar.css';

export default class  SearchBar extends React.Component {
   
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
