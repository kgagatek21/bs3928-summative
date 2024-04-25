import React, { useState } from 'react'
import './WalkerList.css'

export default function WalkerList({walkers}) {

    // const [walkers, setWalkers] = useState([
    //     {name: 'bob', age: '12', email: 'bob@bob.com', phone: '123456789', id: 1},
    //     {name: 'dude', age: '15', email: 'dude@dude.com', phone: '987654321', id: 2},
    //     {name: 'alice', age: '14', email: 'alice@alice.com', phone: '000000000', id: 3},
    //     {name: 'bob', age: '12', email: 'bob@bob.com', phone: '123456789', id: 4},
    //     {name: 'dude', age: '15', email: 'dude@dude.com', phone: '987654321', id: 5},
    //     {name: 'alice', age: '14', email: 'alice@alice.com', phone: '000000000', id: 6}
    // ]);

    const handleClick = (walker) => {
        console.log('Clicked');
        window.alert('Name: ' + walker.name + '\n' + 'Age: ' + walker.age + '\n' + 'Email: ' + walker.email + '\n' + 'Phone Number: ' + walker.phone )
      };

  return (
    <div className='list'>
        <h1>Dog Walker List</h1>
        <div className='border-div'>
            {walkers.map((walker) => (
            <div className='walker-preview' key={walker.id} onClick={event => handleClick(walker)}>
                <h2>{walker.name}</h2>
                <p> Age: {walker.age}</p>
                
            </div>
            ))}
        </div>
      
      
    </div>
  )
}
