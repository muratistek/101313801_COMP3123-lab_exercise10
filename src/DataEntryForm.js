import React, { useEffect, useState } from 'react'
import FormOutput from './FormOutput'

export default function DataEntryForm({ updateOutput }) {

  const provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan']

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [postal, setPostal] = useState('')
  const [province, setProvince] = useState('')


  const onSubmitForm = (event) => {
    event.preventDefault()

    const data = {
      email: email,
      name: name,
      address: address,
      address2: address2,
      city: city,
      postal: postal,
      province: province
    }

    console.log(data);

    updateOutput(data)
  }



  return (
    <div className='container'>
      <h1>Data Entry Form</h1>
      <form className='form'>
        <div className="item1">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='Enter email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="item2">
          <label htmlFor="name">Name</label>
          <input type="text" id='name' placeholder='Full Name' name='name' value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="item3">
          <label htmlFor="address">Address</label>
          <input type="text" id='address' placeholder='1234 Main St' name='address' value={address} onChange={e => setAddress(e.target.value)} />
        </div>
        <div className="item4">
          <label htmlFor="address2">Address 2</label>
          <input type="text" id='address2' placeholder='Apartment, studio, or floor' name='address2' value={address2} onChange={e => setAddress2(e.target.value)} />
        </div>
        <div className="item5">
          <label htmlFor="city">City</label>
          <input type="text" id='city' name='city' value={city} onChange={e => setCity(e.target.value)} />
        </div>
        <div className="item6">
          <label htmlFor="province">Province</label>
          <select onChange={e => setProvince(e.target.value)} name="province" id="province">
            <option value='' selected disabled>Choose...</option>
            {
              provinces.map(province => (
                <option key={province} value={province}>{province}</option>
              ))
            }
          </select>
        </div>
        <div className="item7">
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id='postal' name='postal' value={postal} onChange={e => setPostal(e.target.value)} />
        </div>
        <div className="item8">
          <input type="checkbox" name="terms" id="terms" value='Yes' required />
          <label htmlFor="terms">Agree Terms & Condition?</label>
        </div>
        <div className="item9">
          <input onClick={(e) => onSubmitForm(e)} type="submit" value="Submit" name='btnSubmit' />
        </div>
      </form>

    </div>
  )
}
