const express = require('express');
const fs = require('fs');
const router = express.Router();


router.get('/', (req,res)=>{
    const data = ['hola', 'mundo']
    res.send(data)
})

const removeExtension = (filename) => {
    return filename.split('.').shift();
}

const PATH_ROUTES = __dirname;
fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file)
    if(name !== 'index'){
        console.log('cargando ruta: ' + name)
        router.use(`/${name}`, require(`./${file}`))
    }
})



module.exports = router;