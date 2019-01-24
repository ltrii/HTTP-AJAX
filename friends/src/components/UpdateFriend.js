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
        padding-top: 20px;

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

const clearedItem = {
    description: '',
    imageUrl: '',
    name: '',
    price: '',
    shipping: ''
  };

class UpdateFriend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nameHold: props.name,
            emailHold: props.email,
            ageHold: props.age,
            idHold: props.id,
            cit: clearedItem
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
        axios.put('http://localhost:5000/friends/', body)
            .then(() => this.setState({nameHold: '', emailHold: '', ageHold: ''}))
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
          <input type="text" onChange={this.onChange} placeholder={this.props.name} value={this.state.nameInput} name="nameInput" />
          <input type="text" onChange={this.onChange} placeholder={this.props.age} value={this.state.ageInput} name="ageInput" />
          <input type="email" onChange={this.onChange} placeholder={this.props.email} value={this.state.emailInput} name="emailInput" />
          <button type="submit">edit friend</button>
      </UpdateFriendForm>
    </UpdateFriendHold>
  )
    }
}

export default UpdateFriend;