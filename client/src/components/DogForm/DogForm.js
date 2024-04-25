import React, { useReducer, useState } from 'react';
import './DogForm.css'
import api from '../api/api'

function DogForm() {
    const formReducer = (state, event) => {
        if(event.reset) {
          return {
            age: '',
            email: '',
            name: '',
            phone: '',
          }
        }
      
       return {
         ...state,
         [event.name]: event.value
       }
    }
      
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const response = await api.post('/dogs-routes', formData)

        // fetch('http://localhost:8080/dogs-routes', {
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(formData)
        // })
        
        console.log('Data Sent to Backend = ' + response.data)


        setTimeout(() => {
        setSubmitting(false);
        setFormData({
            reset: true
        })
        }, 3000);
        window.location.reload(true);
    }
      
    const handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        setFormData({
        name: event.target.name,
        value: isCheckbox ? event.target.checked : event.target.value,
        });
    }

    return (
        <div className="wrapper2">
        {submitting &&
          <div>
            You are submitting the following:
            <ul>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
              ))}
            </ul>
          </div>
        }
        <form className='form-box' onSubmit={handleSubmit}>
          <h1>Dog's Details</h1>
          <fieldset disabled={submitting}>
            <label>
              <p>Name</p>
              <input name="name" onChange={handleChange} value={formData.name || ''}/>
            </label>
            <label>
              <p>Age</p>
              <input name="age" onChange={handleChange} value={formData.age || ''}/>
            </label>
            <label>
              <p>Species</p>
              <input name="species" onChange={handleChange} value={formData.species || ''}/>
            </label>
          </fieldset>
          <button type="submit" disabled={submitting}>Submit</button>
        </form>
      </div>
    )
}


export default DogForm

