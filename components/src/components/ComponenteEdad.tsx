import React from 'react'
import { useEffect } from 'react'

type Props = {edad: number}

export default function ComponenteEdad({edad}: Props) {

useEffect(() => {
  console.log(edad)
}, [edad])

  return (
    <div>Mi edad es {edad} años</div>
  )
}