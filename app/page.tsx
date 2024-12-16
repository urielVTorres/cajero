import Link from 'next/link'
import React from 'react'

const home = () => {
  return (
    <div className='flex flex-col text-3xl'>
        <h1 className='text-center mt-20 text-5xl'>Ingrese su tarjeta para continuar</h1>
        <div className='mt-20 text-center flex justify-around'>
            <Link href="/deposito"
              className='border-2 p-3 rounded-md shadow-md'
            >Deposito sin tarjeta</Link>
            <Link href="/servicios"
              className='border-2 p-3 rounded-md shadow-md'
            >Pago de servicios</Link>
            <Link href="/validacion"
              className='border-2 p-3 rounded-md shadow-md'
            >Continuar</Link>
        </div>
    </div>
  )
}

export default home