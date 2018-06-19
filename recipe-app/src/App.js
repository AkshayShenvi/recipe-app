import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridView from './Components/GridView/GridView.js';
import CardList from './Components/CardList/CardList.js';
import Card from './Components/Card/Card.js';
import SearchBox from './Components/SearchBox/SearchBox.js';
import Scroll from './Components/Scroll/Scroll.js';


const initialState = {
        robots: [],
		searchfield: '',
      }

class App extends Component {
	constructor()
	{
		super()
		this.state = initialState;
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();
		})
		.then(users=>{
			this.setState({robots:users});
		})
	}

	onSearchChange=(event)=>{
		this.setState({
			searchfield:event.target.value
		})
	}
  render() {
  	const filteredRobots =this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
    return (
      <div className="App">
      	<h1> Recipe App</h1>
      	<SearchBox searchChange={this.onSearchChange}/>
      	<Scroll>
        	<CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
