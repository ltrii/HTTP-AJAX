import React from 'react'
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    withRouter
  } from 'react-router-dom';
import UpdateFriend from './UpdateFriend';

const FriendDiv = styled.div`
    border-top: 1px solid rgb(244,244,244);
    padding: 5px;
    
    &:hover {
            background-color: rgb(244,244,244);
        }

    button {
      border: none;
      font-weight: bold;
      color: red;
    }

    .buttonhold {
        display: flex;
        justify-content: space-between;
    }
  `


function Friend(props) {
  return (
        <FriendDiv key={props.friend.id}>
          <p>Name: {props.friend.name}</p>
          <p>Email: {props.friend.email}</p>
          <p>Age: {props.friend.age}</p>
          <div className="buttonhold">
              <button onClick={props.friendDelete}>X</button>
              <NavLink exact to="/edit/{props.friend.id}" >
                  <button>edit</button>
              </NavLink>
          </div>
          <Route exact path="/edit/{props.friend.id}" render={props => <UpdateFriend {...props} friends={this.state.friends} />} />
          
        </FriendDiv>
      )
}

export default Friend;