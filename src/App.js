import React from 'react';
import axios from 'axios'
import './App.css';
import PortfolioItem from './components/PortfolioItem'
//Our Goals
//Given the portfolio item, render it on screen
//Make a AJAX request to get the portfolio items from the server

const exampleEntries = [
    {
        "id": 1,
        "title": "Everything is Gold",
        "description": "Life is gold like a machine, \nbuy a watch just to flex.",
        "background": "#ffd700",
        "created_at": "2020-01-16T22:54:37.977Z",
        "updated_at": "2020-01-16T22:54:47.844Z"
    },
    {
        "id": 2,
        "title": "Red is Passion",
        "description": "Passion is fire\nFire is lit\nPoop emoji",
        "background": "#f03434",
        "created_at": "2020-01-16T22:55:12.410Z",
        "updated_at": "2020-01-16T22:55:12.414Z"
    }
]

class App extends React.Component{
  state = {
    data: [],
    photos: []
  }
  
  async componentDidMount(){
    console.log("ComponentDidMount")
    const portfolio_response = await axios({
      method: 'GET',
      url: 'https://be-edo.herokuapp.com/home-page'
    })
    
console.log(portfolio_response);

    const data = portfolio_response.data;
    const photos = portfolio_response.data.photos
    // console.log("App.componentDidMount data", data)
    this.setState({data})
    this.setState({photos})
  }

  render(){
    return (
      <div className="App">
        {/* <p>{this.state.data.vimeoId}</p> */}
        {this.state.photos.map(entry => {
          return (
            <p>ciao dai</p>
            // <PortfolioItem title={entry.url} description={entry.hash} background={entry.provider} />
          )
        })}

      </div>
    );
  }
}

export default App;
