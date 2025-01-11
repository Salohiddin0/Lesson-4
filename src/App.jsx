import React, { use, useState } from 'react'
import './App.css'

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0
  }
]

export default function App () {
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriend, setShowAddFriend] = useState(false)

  const handleShowFriend = () => {
    setShowAddFriend(prev => !prev)
  }
  //   const handleSubmitFriend = () => {}
  const handleSelectFriend = () => {}

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={friends} />
        {showAddFriend && <FormAddNewFriend />}

        <Button onClick={handleShowFriend}>
          {showAddFriend ? 'close' : 'Add Friend'}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  )
}

function FriendList () {
  const friends = initialFriends
  return (
    <ul>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  )
}

const Friend = ({ friend }) => {
  return (
    <li>
      <img src='https://avatar.iran.liara.run/public/35' alt={friend.name} />
      <h2>{friend.name}</h2>

      {friend.balance > 0 && (
        <p className='red'>
          {friend.name} has got ${friend.balance} debt from you
        </p>
      )}
      {friend.balance < 0 && (
        <p className='green'>
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>No debt, you and {friend.name} are equal</p>}

      <button className='button'>Select</button>
    </li>
  )
}

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='button'>
      {children}
    </button>
  )
}

const FormAddNewFriend = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48?u=')

  const handleSubmitFriend = e => {
    e.preventDefault()
    // if (!name) return null

    // const newFriend = {
    //   id: crypto.randomUUID()
    // }
  }

  return (
    <>
      <form action='#'>
        <label htmlFor='photo'>☺️ Friend's photo</label>
        <input
          type='text'
          id='photo'
          placeholder='Enter your friend’s photo URL'
        />
        <label
          type='text'
          id='photo'
          placeholder='Enter your friend’s photo'
          name={name}
          //   onChange={e => setPhoto(e.target.value)}
          htmlFor='name'
        >
          ☺️ Friend's name
        </label>
        <input type='text' id='name' placeholder='Enter your friend’s name' />
        {/* <Button>Add Friend</Button> */}
      </form>
    </>
  )
}

const FormSplitBill = () => {
  return (
    <form className='form-split-bill'>
      <h2>Split the bill with X</h2>
      <label htmlFor='bill'>📃 Bill</label>
      <input type='number' id='bill' />
      <label htmlFor='your-expense'>💵 Your expense</label>
      <input type='number' id='your-expense' />
      <label htmlFor='friend-expense'> 🧍‍♂️Friend's expense</label>
      <input type='number' id='friend-expense' />

      <select name='' id=''>
        <option value='you'>You</option>
        <option value='friend'>X</option>
      </select>

      <Button>Split</Button>
    </form>
  )
}
