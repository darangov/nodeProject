
// imports
// creo servidor

// const http = require('http');

// http.createServer(function(request, response){
//     console.log('Se ha realizado una peticion');

//     response.write('Hola mundo');
//     response.end();
// }).listen(3000);



//console.log('hola');

// import
const express = require('express');
const {PORT} = require('./config');

const app = express();
const rutas_api  = require('./routes/api.routes')(app);

app.listen(PORT, () => { // ()=> similar a function() - funciones anonimas o lambda
    console.log('El servidor se encuentra arriba en el puerto' + PORT);
});

app.get('/', (request, response) =>{
    response.send('Respondo desde el home - express');

})

app.get('/api', (request, response) =>{
    response.send('Respondo desde el api');

})

app.get('*', (request, response) =>{
    response.send('Ruta no encontrada');

})


//console.log('hola 2');

