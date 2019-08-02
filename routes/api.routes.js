const calculadora = require('../calculadora');

var usrs = [
    {
        id:1,
        nombre: 'John Doe'
    },
    {id: 2,
    nombre: 'Alexa Martins'}
]


module.export = (app) => {
    app.get('/api'), (request, response) => {
        response.send('Respondo desde el api')
    }

    app.get('/api/users', (request, response) => {
        response.json(usrs);
    }); 

    app.get('/api/multiplica/:num1/:num2', (request,response) =>  {
        var multiplicacion = calculadora.multiplicacion(request.params.num1, response.params.num2);

        response.send(`El resultado de la multiplicacion es ${multiplicacion}`); // `: apostrofe con Alt gr + } 


    })
} 