import React from 'react'
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    withRouter
  } from 'react-router-dom';
import UpdateFriend from './UpdateFriend';
import axios from 'axios';

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
    const name = `${props.friend.name}`;
    const age = `${props.friend.age}`;
    const email = `${props.friend.email}`;
    const id = `${props.friend.id}`;

function friendDelete(e) {
        axios.delete(`http://localhost:5000/friends/${props.friend.id}`)
                  .then((res) => console.log(res))
                  .catch(err => console.log(err.response));
      }

  return (
        <FriendDiv key={props.friend.id}>
          <p>Name: {props.friend.name}</p>
          <p>Email: {props.friend.email}</p>
          <p>Age: {props.friend.age}</p>
          <div className="buttonhold">
              <button onClick={friendDelete}>X</button>
              <NavLink exact to={`/edit/${props.friend.id}`} >
                <button>edit</button>
              </NavLink>
          </div>
          <Route 
            exact 
            path={`/edit/${props.friend.id}`} 
            render={props => <UpdateFriend 
                {...props }
                id={id} 
                name={name}
                email={email}
                age={age}
                />} 
            />
            
          
        </FriendDiv>
      )
}

export default Friend;