import React, { useState } from 'react'
import './DogList.css'

export default function DogList({dogs}) {

    // const [dogs, setDogs] = useState([
    //     {name: 'Good Boy', age: '5', species: 'Golden Retrevier', id: 1},
    //     {name: 'Good Girl', age: '2', species: 'German Shepherd', id: 2},
    //     {name: 'Lucy', age: '1', species: 'Jack Russel', id: 3},
    //     {name: 'Tommy', age: '10', species: 'Labrador', id: 4},
    //     {name: 'Dog', age: '7', species: 'Mallanois', id: 5},
    //     {name: 'Nick', age: '20', species: 'Chihuahua', id: 6},
        
    // ]);

    const handleClick = (dog) => {
        // Handle form submission logic here
        console.log('Clicked');
        window.alert('Name: ' + dog.name + '\n' + 'Age: ' + dog.age + '\n' + 'Species: ' + dog.species)
      };

  return (
    <div className='list'>
        <h1>Dog List</h1>
        <div className='border-div'>
            {dogs.map((dog) => (
            <div className='dog-preview' key={dog.id} onClick={event => handleClick(dog)}>
                <h2>{dog.name}</h2>
                <p> Age: {dog.age}</p>
                
            </div>
            ))}
        </div>
      
      
    </div>
  )
}
