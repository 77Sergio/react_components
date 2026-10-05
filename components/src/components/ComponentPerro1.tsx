import React from 'react'
import { useEffect } from 'react'

type Props = {perro1: string}

export default function ComponentPerro1({perro1}: Props) {

useEffect(() => {
  console.log(perro1)
}, [perro1])

  return (
    <div>Mi primer perro se llama {perro1}</div>
  )
}