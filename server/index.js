const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const {mongoose}  = require ('./database');


// Settings y configuración
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}))


//Routers
app.use('/api/Usuario', require('./routes/usuario.routes'));




//Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(' Server on port ', app.get('port'));
});