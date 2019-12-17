import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      rating: 0,
      search: "",
      movielist: [],
      star: 5,
      display :false
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  star=(e)=> {
    this.setState({
      star:e
    })
  }
  add=()=> {
    this.setState ({
      movielist : [...this.state.movielist,{name:this.state.name , img:this.state.img , rating:this.state.rating}], 
      display : !this.state.display
    })
  }
  render() {
    return (<div className="moviup">
      <header className="header-nav">
        <input type='text' className="item1" placeholder="Search" onChange={(e) => this.setState({ search: e.target.value })} />
        <button className="item2"  >Search</button>
        <span onClick ={()=>this.star(1)}>⭐</span>
        <span onClick ={()=>this.star(2)}>⭐</span>
        <span onClick ={()=>this.star(3)}>⭐</span>
        <span onClick ={()=>this.star(4)}>⭐</span>
        <span onClick ={()=>this.star(5)}>⭐</span>
      </header>
       <Movie className="part1" input ={this.state.search} star = {this.state.star} movies = {this.state.movielist} />
      <p  className="btn2" onClick ={()=>this.setState({display:!this.state.display})}>+</p>
      <div id="col1" className ={this.state.display ? "display":"hidden"}>
        <input className="text1" type="text" placeholder="Name" name="name" onChange={this.handleChange} />
        <input className="text1" type="text" placeholder="Img" name="img" onChange={this.handleChange} />
        <input className="text1" type="text" placeholder="Rating" name="rating" onChange={this.handleChange} />
        <button className="btn" onClick={this.add}  >Add</button>
      </div>
    </div>);
  }
}
export default App;