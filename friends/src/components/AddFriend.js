import React from 'react'
import styled from 'styled-components';
import axios from 'axios';

class AddFriend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: '',
            emailInput: '',
            ageInput: '',
            nameHold: '',
            emailHold: '',
            ageHold: ''
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    addFriend = () => {
        let body = {
            name: this.state.nameInput,
            email: this.state.emailInput,
            age: Number(this.state.ageInput)
        }
        axios.post('http://localhost:5000/friends', body)
            .then(() => this.setState({nameInput: '', emailInput: '', ageInput: ''}))
            .then(() => this.props.getAxios())
            .catch(err => console.log(err.response));
    }

    render(){
  return (
    <div>
      <form onSubmit={(e) => {
          e.preventDefault();
          this.addFriend();
      }
      }>
          <input type="text" onChange={this.onChange} placeholder="name" value={this.state.nameInput} name="nameInput" />
          <input type="text" onChange={this.onChange} placeholder="age" value={this.state.ageInput} name="ageInput" />
          <input type="email" onChange={this.onChange} placeholder="email" value={this.state.emailInput} name="emailInput" />
          <button type="submit">add friend</button>
      </form>
    </div>
  )
    }
}

export default AddFriend;
