import React, {useEffect, useState } from 'react'
import './Layout.css'
import WalkerForm from '../WalkerForm/WalkerForm';
import DogForm from '../DogForm/DogForm';
import WalkerList from '../WalkerList/WalkerList';
import DogList from '../DogList/DogList';
import api from '../api/api'


export default function Layout() {
 

  const [dogWalkers, setDogWalkers] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8080/walkers-routes')
  //     .then(response => response.json())
  //     .then(data => {
  //       setDogWalkers(data);
        
  //     })
  //     .catch(error => {
  //       console.error('Error fetching dog walkers:', error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchWalkers = async () => {
      try{
        const response = await api.get('/walkers-routes');
        setDogWalkers(response.data);
      }catch (err) {
        if (err.response) {
          // Not in  200 range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchWalkers();
  }, [])

  const [dogs, setDogs] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8080/dogs-routes')
  //     .then(response => response.json())
  //     .then(data => {
  //       setDogs(data);
        
  //     })
  //     .catch(error => {
  //       console.error('Error fetching dog walkers:', error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchDogs = async () => {
      try{
        const response = await api.get('/dogs-routes');
        setDogs(response.data);
      }catch (err) {
        if (err.response) {
          // Not in  200 range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchDogs();
  }, [])

  return (
    <div className='grid-container'>
      <WalkerForm />
      <DogForm />
      <WalkerList walkers={dogWalkers} />
      <DogList dogs={dogs} />
    </div>
  )
}
