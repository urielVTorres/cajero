import Link from 'next/link'
import React from 'react'

const page = () => {
    const usuario = "Panchito"
    const saldo = 2532.25
  return (
    <div className='grid grid-cols-1 text-3xl p-10 text-center'>
        <h1 className='text-center text-5xl font-bold'>Bienvenido, {usuario}</h1>
        <table className='text-right my-10'>
            <tbody>
                <tr>
                    <th>Saldo</th>
                    <td>{saldo}</td>
                </tr>
                <tr>
                    <th>Retiro disponible</th>
                    <td>{ saldo < 9000 ? Math.floor(saldo / 100) * 100 : 9000}</td>
                </tr>
                <tr>
                    <th>Retiro minimo</th>
                    <td>{100}</td>
                </tr>
                <tr>
                    <th>Retiro cantidad</th>
                    <td><input type="number" placeholder='100' className='p-2 border-2 rounded-md'/></td>
                </tr>
            </tbody>
        </table>
        <div className='flex justify-evenly'>
            <Link href={"cliente/deposito"}
                className='border-2 p-3 rounded-md shadow-md'
                >Depositar a cuenta</Link>
            <Link href={"cliente/servicios"}
                className='border-2 p-3 rounded-md shadow-md'
                >Pago de servicios</Link>
            <Link href={"cliente/movimientos"}
                className='border-2 p-3 rounded-md shadow-md'
                >Consultar movimientos</Link>
            <Link href={"cliente/transaccion"}
                className='border-2 p-3 rounded-md shadow-md'
                >Retirar</Link>
            <Link href={"/"}
                className='border-2 p-3 rounded-md shadow-md'
                >Salir</Link>
        </div>
    </div>  
  )
}

export default page