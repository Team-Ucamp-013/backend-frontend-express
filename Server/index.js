const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
const PORT = 4006
const {librosRouter}= require('./routes')


app.use('/api', librosRouter)

 
app.get('/', (req,res)=>{
    res.send('Esto esta vivo')
})


app.listen(PORT,()=>{
    console.log(`Servidor conectado en el puerto ${PORT}`)
})