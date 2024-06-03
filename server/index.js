// Importing required modules
import express from 'express'; // Express framework for building web applications
import * as fs from 'node:fs'; // File system module for reading files
import cors from 'cors'; // CORS middleware for enabling cross-origin resource sharing



// Setting up an Express application
const app = express();

const port = 3000; // Port number where the server will run

// Adding CORS middleware for cross-origin requests
app.use(cors());

// Handling requests to the root endpoint '/'
app.get('/', (req, res) => {
    res.send('Hello World!'); // Sending a simple greeting
});

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Logging server startup
});

const carArray = [
    {
        brand: 'Audi',
        release: '9-2-2024'
    },

    {
        brand: 'BMW',
        release: '9-2-2024'
    },

    {
        brand: 'Kia',
        release: '9-2-2024'
    }
]

app.get('/car-brands', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');

    res.send(`<pre>${JSON.stringify(carArray, null, 2)}</pre>`);

});

// /nike-shoes endpoint
app.get('/nike-shoes', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    // json file being read
    fs.readFile('nike-shoes.json', 'utf8', function (err, data) {
        res.send(`${data}`);
    });

});

// /nike-clothes endpoint
app.get('/nike-clothes', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    // json file being read    
    fs.readFile('nike-clothes.json', 'utf8', function (err, data) {
        res.send(`${data}`); // sending json data to end-point
    });

});

// /nike-accesoires endpoint
app.get('/nike-accesoires', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    // json file being read    
    fs.readFile('nike-accesoires.json', 'utf8', function (err, data) {
        res.send(`${data}`); // sending json data to end-point
    });

});

// /adidas-clothes endpoint
app.get('/adidas-clothes', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    // json file being read   
    fs.readFile('adidas-clothes.json', 'utf8', function (err, data) {
        res.send(`${data}`); // sending json data to end-point
    });

});

// adidas-shoes endpoint
app.get('/adidas-shoes', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    // json file being read
    fs.readFile('adidas-shoes.json', 'utf8', function (err, data) {
        res.send(`${data}`); // sending json data to end-point
    });

});

// '/adidas-accesoires' endpoint
app.get('/adidas-accesoires', (req, res) => {

    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    // json file being read
    fs.readFile('adidas-accesoires.json', 'utf8', function (err, data) {
        res.send(`${data}`); // sending json data to end-point
    });
});