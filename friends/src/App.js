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
    padding: 5px;
    &:hover {
            background-color: rgb(244,244,244);
        }
  `

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: []
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

friendClick = () => {
  
}

friendDelete = (e) => {
  axios.delete(`http://localhost:5000/friends/${this.friend.id}`)
            .then(() => this.props.getAxios())
            .catch(err => console.log(err.response));
}

  render() {

    var mapFriends = this.state.friends.map((friend, i) => (
      <FriendDiv key={friend.id}>
        <p>Name: {friend.name}</p>
        <p>Email: {friend.email}</p>
        <p>Age: {friend.age}</p>
        <button onClick={this.friendDelete}>X</button>
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
