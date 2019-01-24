import React from 'react'
import styled from 'styled-components';
import axios from 'axios';

const UpdateFriendHold = styled.div`
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
    `

const UpdateFriendForm = styled.form`
        display: flex;
        justify-content: space-evenly;

        input {
            border: none;
            background-color: rgb(233,233,233);
            padding: 5px;
            border-radius: 3px;
        }

        button {
            border: none;

            &:hover {
                background-color: darkred;
                color: white;
            }
        }
    `;

class UpdateFriend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nameHold: '',
            emailHold: '',
            ageHold: ''
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    UpdateFriend = () => {
        let body = {
            name: this.state.nameHold,
            email: this.state.emailHold,
            age: Number(this.state.ageHold)
        }
        axios.post('http://localhost:5000/friends', body)
            .then(() => this.setState({nameInput: '', emailInput: '', ageInput: ''}))
            .then(() => this.props.getAxios())
            .catch(err => console.log(err.response));
    }

    render(){
  return (
    <UpdateFriendHold>
      <UpdateFriendForm onSubmit={(e) => {
          e.preventDefault();
          this.UpdateFriend();
      }
      }>
          <input type="text" onChange={this.onChange} placeholder="name" value={this.state.nameHold} name="nameHold" />
          <input type="text" onChange={this.onChange} placeholder="age" value={this.state.ageHold} name="ageHold" />
          <input type="email" onChange={this.onChange} placeholder="email" value={this.state.emailHold} name="emailHold" />
          <button type="submit">add friend</button>
      </UpdateFriendForm>
    </UpdateFriendHold>
  )
    }
}

export default UpdateFriend;
