import React from 'react'
import Friend from './Friend';

function Friends(props) {
  return (
    <div>
      {props.friends.map((f) =>{
          return <Friend friend={f} />
      })}
    </div>
  )
}

export default Friends;