import React, { Component } from 'react'
import axios from 'axios';
import AddFriend from './components/AddFriend';

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

  render() {

    var mapFriends = this.state.friends.map((friend, i) => (
      <div key={i}>
        <p>Name: {friend.name}</p>
        <p>Email: {friend.email}</p>
        <p>Age: {friend.age}</p>
      </div>
    ))

    return (
      <div>
        <AddFriend />
        {mapFriends}
      </div>
    )
  }
}

export default App;
