import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex text-3xl text-center justify-center' >
        <form className='mt-20'>
            <h1>Ingrese su PIN:</h1>
            <input type="password" className='border-2 rounded-md block p-3 mt-5 mb-10 shadow-md'></input>
            <Link href={"/cliente"} 
              className='border-2 p-3 rounded-md shadow-md'
              >Continuar</Link>
        </form>
    </div>
  )
}

export default page