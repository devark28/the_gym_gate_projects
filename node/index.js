/**
Practical

Create an Express.js middleware function called requestLogger that logs the following information for every incoming request:

HTTP method (e.g., GET, POST)
URL path
Timestamp of the request
Response time (in milliseconds)

Then:

Integrate this middleware into an Express app.
The app should have at least two routes (/ and /users) that return a JSON response.
Ensure the middleware runs for all routes and prints logs in the following format:

[2025-11-11T18:23:10Z] GET /users - 5ms
 */

import express from 'express';

const app = express()

app.use((req, res, next) => {
    const timestamp = new Date()
    req.startTime = timestamp.getTime();
    next();
})

app.get('/', (req, res, next) => {
    res.json({message: "Welcome to my app!"});
    next();
})

app.get('/users', (req, res, next) => {
    res.json([{id: 1, name: "bruce"}, {id: 2, name: "another one"}]);
    next();
})

app.use((req, res, next) => {
    const timestamp = new Date()
    const method = req.method;
    const path = req.path;
    const startTime = req.startTime;
    console.log(`[${timestamp.toISOString()}] ${method} ${path} - ${timestamp.getTime() - startTime}ms`);
    next();
})

app.listen(3000);