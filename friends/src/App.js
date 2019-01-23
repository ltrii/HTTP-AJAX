import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import AddFriend from './components/AddFriend';

const AppHold = styled.div`
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: auto;
  `;

const FriendDiv = styled.div`
    border-top: 1px solid rgb(244,244,244);
  `

class App extends Component {
  state = {
    friends: []
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

  render() {

    var mapFriends = this.state.friends.map((friend, i) => (
      <FriendDiv key={i}>
        <p>Name: {friend.name}</p>
        <p>Email: {friend.email}</p>
        <p>Age: {friend.age}</p>
      </FriendDiv>
    ))

    return (
      <AppHold>
        <AddFriend getAxios={this.getAxios} friends={this.state.friends} />
        {mapFriends}
      </AppHold>
    )
  }
}

export default App;
