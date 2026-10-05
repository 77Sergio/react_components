import React, { useEffect } from 'react'

type Props = {perro2: string}

export default function ComponentPerro2({perro2}: Props) {

useEffect(() => {
  console.log(perro2)
}, [perro2])

  return (
    <div>Mi segundo perro se llama {perro2}</div>
  )
}