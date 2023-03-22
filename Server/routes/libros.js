const express = require('express');
const router = express.Router();

const libros = []

router.get('/', (req,res)=>{
    res.json(libros)
})

router.post('/', (req,res)=>{
    const {titulo, autor, editorial, año} = req.body;
    if(titulo && autor && editorial && año ){
        const id = libros.length + 1;
        const newTitle  = {...req.body, id}
        console.log(newTitle)
        res.json('Petición recibida')
        libros.push(newTitle);
    } else {
        res.send('Error de almacenamiento en la peticion')
    }
})

module.exports = router