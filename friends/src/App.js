import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import AddFriend from './components/AddFriend';
import Friends from './components/Friends';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';

const AppHold = styled.div`
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: auto;
  `;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
      id: 0
    }
  }


componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      this.setState({ friends: res.data })
    })
    .catch(err => console.log(err));
}

getAxios = () => {
  axios.get('http://localhost:5000/friends')
    .then(res => this.setState({friends: res.data}), () => console.log(this.state.friends))
    .catch(err => console.log(err.response));
}

friendEdit = () => {
  
}

  render() {

    return (
      <AppHold>
        <AddFriend getAxios={this.getAxios} friends={this.state.friends} />
        <Friends friends={this.state.friends} />
      </AppHold>
    )
  }
}

export default App;
