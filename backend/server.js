// dependencies
import express from 'express';

// variables
const PORT = 80;
let counter = 0;

// express environment using name 'app'
const app = express();

// middleware - do something - continue
app.get('*', (req, res, next) => {

    // increment...
    counter++;

    // number of requests...
    console.log('counter hejhej', counter);

    next();
});


// routes - listen on requests
app.get('/', (req, res) => {

    res.send("Hello world...");
});


// start server...
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});