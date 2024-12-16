import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-3xl flex justify-center mt-20'>
        <form className='w-1/4'>
            <div className='flex flex-col gap-3 my-10'>
                <label>No. Cuenta, tarjeta o CLABE</label>
                <input type='text' className='p-2 border-2 rounder-md' />
                <label>Cantidad</label>
                <input type='number' className='p-2 border-2 rounder-md'/>
            </div>
            <div>
                <Link href="/cliente"
                   className='border-2 p-3 rounded-md shadow-md'
                >Cancelar</Link>
                <Link href="/cliente/transaccion"
                   className='border-2 p-3 rounded-md shadow-md'
                >Continuar</Link>
            </div>
        </form>
    </div>
  )
}

export default page