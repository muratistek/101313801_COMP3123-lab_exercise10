import React from 'react'

export default function FormOutput(props) {
  let data = props.data
  console.log(data)

  return (
    <div className='container'>
      <div className="output">
        <h3>Email: {data.email}</h3>
        <h3>Full Name: {data.name}</h3>
        <h3>Address: {data.address} {data.address2}</h3>
        <h3>City: {data.city}</h3>
        <h3>Province: {data.province}</h3>
        <h3>Postal Code: {data.postal}</h3>
      </div>
    </div>
  )
}
