import React from 'react'
import { useEffect } from 'react'

type Props = {nombre: string}

export default function Hola2({ nombre }: Props) {

useEffect(() => {
  console.log(nombre)
}, [nombre])


  return (
    <div>Hola tu {nombre}</div>
  )
}