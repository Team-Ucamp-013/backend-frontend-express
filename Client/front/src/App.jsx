import React, { useEffect, useState } from 'react';
import axios from 'axios'

const App = () => {
  const [datos, setDatos] = useState(null)

  const getData = async()=>{
    const url = 'https://backend-ejercicio.vercel.app/api'
    const response = await axios.get(url)
    console.log(response.data)
    setDatos(response.data)
  }
  
  useEffect(()=>{
    getData();
  },[]);

  return (
    <div>
      {/* <button onClick={getData}>Enviar</button> */}
      {datos.map(x =>
        <div key={x.id}>
         <h1>Titulo: {x.titulo}</h1>
         <h3>Autor: {x.autor}</h3>
         <h3>Editorial: {x.editorial}</h3>
        </div>)}
    </div>
  )
}

export default App
