import React, { useReducer, useState } from 'react';
import './WalkerForm.css';
import api from '../api/api'


function WalkerForm() {
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

        const response = await api.post('/walkers-routes', formData)


        // fetch('http://localhost:8080/walkers-routes', {
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
        <div className="wrapper1">
        <h1>Wagg.ly</h1>

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
        <form className = "form-box" onSubmit={handleSubmit} >
            <h1 className='form-title'>Dog Walker's Details</h1>
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
              <p>Email Address</p>
              <input name="email" onChange={handleChange} value={formData.email || ''}/>
            </label>
            <label>
              <p>Phone Number</p>
              <input name="phone" onChange={handleChange} value={formData.phone || ''}/>
            </label>
          </fieldset>
          {/* <fieldset disabled={submitting}>
           <label>
             <p>Apples</p>
             <select name="apple" onChange={handleChange} value={formData.apple || ''}>
                 <option value="">--Please choose an option--</option>
                 <option value="fuji">Fuji</option>
                 <option value="jonathan">Jonathan</option>
                 <option value="honey-crisp">Honey Crisp</option>
             </select>
           </label>
           <label>
             <p>Count</p>
             <input type="number" name="count" onChange={handleChange} step="1" value={formData.count || ''}/>
           </label>
           <label>
             <p>Gift Wrap</p>
             <input 
                type="checkbox" 
                name="gift-wrap" 
                onChange={handleChange} 
                checked={formData['gift-wrap'] || false} 
                disabled={formData.apple !== 'fuji'} 
              />
           </label>
         </fieldset> */}
          <button type="submit" disabled={submitting}>Submit</button>
        </form>
      </div>
    )
}


export default WalkerForm

