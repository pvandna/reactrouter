import React from 'react'
import { useParams } from 'react-router-dom'

// how to take dynamic data
function User() {

    const {id} = useParams()                   //custom hook
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User {id} page :) <br/><br/>welcome {id} </div>
  )
}

export default User