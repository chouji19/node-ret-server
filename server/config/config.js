//
//  Puerto
//
process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//------------Data base
let urlDB;

if (process.env.NODE_ENV === 'dev')
    urlDB = 'mongodb://localhost:27017/cafe';
else
    urlDB = process.env.MONGO_URI;

process.env.URLDB = urlDB;


//
//  Usos del token
//
// Vencimiento 
process.env.CADUCIDAD_TOKEN = '48h';
//seed autenticacion
process.env.SEED = process.env.SEED || 'estes-es-el-seed-desarollo';


//Client ID Google

process.env.CLIENT_ID = process.env.CLIENT_ID || '1032358722953-s97lp15pcam67t5hdvlvm74sf3kdmuc0.apps.googleusercontent.com';