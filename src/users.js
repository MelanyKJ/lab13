import React from 'react'
import { useParams } from 'react-router-dom'
function Users(){
  let{param} = useParams();
  return(
    <div>
        <h1>Usuarios</h1>
        <p>Identificador {param}</p>
    </div>
  )

}

export default (Users);

