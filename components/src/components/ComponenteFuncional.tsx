import React from 'react'
import { useEffect } from 'react'

type Props = {apellido: string}



const ComponenteFuncional = ({apellido}: Props) => {

useEffect(() => {
  console.log(apellido)
}, [apellido])


  return (

    
    <div>Componente Funcional - Mi apellido es: {apellido}</div>
  )
}

export default ComponenteFuncional