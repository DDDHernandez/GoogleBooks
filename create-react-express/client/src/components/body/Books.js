import React, { Component } from "react";
import SearchArea from '../searchInput/SearchArea';
import request from 'superagent';
import Booklist from '../books/Booklist';


class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            Books: [],
            searchfield: ''
        }
    }

    searchBook = (event) => {
        event.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchfield})
            .then((data) => {
                console.log(data)
                 this.setState({ Books: [...data.body.items]})
            })
        }

    handleSearch = (event) => {
        // console.log(event.target.value)
        this.setState({ searchfield: event.target.value})
    }

  render() {
    return (
        <div>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            <div className="container">
            
           
            <Booklist Books={this.state.Books}/>
            
        
            </div>
        </div>
   
    );
  }
}

export default Books;