import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-5xl text-center p-20'>
        <h1>Transacción exitosa</h1>
        <div className='flex justify-evenly mt-20'>
            <Link href={"/"}
                className='border-2 p-3 rounded-md shadow-md'
            >Salir</Link>
        </div>
    </div>
  )
}

export default page