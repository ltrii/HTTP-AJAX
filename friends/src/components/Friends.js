import React from 'react'
import Friend from './Friend';

function Friends(props) {
  return (
    <div>
      {props.friends.map((f) =>{
          return <Friend friend={f} id={f.id} />
      })}
    </div>
  )
}

export default Friends;