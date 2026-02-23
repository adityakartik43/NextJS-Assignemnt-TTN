import Logout from '@/app/components/Logout'
import React from 'react'

const page = async() => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div>

      <Logout />
      {
        data.map((elem)=>{
          return (
            <div key={elem.id} className='border-1 border-white m-2 p-2'>
              <h3>{elem.name}</h3>
              <h4>{elem.username}</h4>
              <p>{elem.email}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default page