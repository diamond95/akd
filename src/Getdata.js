import React, { Component } from "react";
import './App.css';



class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
      }
    }

    componentDidMount() {

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        });

    }

    render() {

      var { isLoaded, items } = this.state;

      if(!isLoaded) {
        return <div>Učitavanje...</div>;
      }

      else {

        return (
            // return json data 
          items.title
        );
      }


    }
}

export default App;