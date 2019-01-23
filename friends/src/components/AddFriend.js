import React from 'react'

function AddFriend() {
  return (
    <div>
      <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="age" />
          <input type="text" placeholder="email" />
          <button type="submit">add friend</button>
      </form>
    </div>
  )
}

export default AddFriend;
