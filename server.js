// ------------ IMPORTS ------------ //

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const routes = require('./routes');
const port = process.env.PORT;
const app = express();


// ------------ MIDDLEWARE ------------ //

// CORS
app.use(cors({
  origin: [`http://localhost:3000`],
  methods: "GET,POST,PUT,DELETE",
  // credentials: true, // kenny had this on the repo, not sure if we need it if using JWTS
  optionsSuccessStatus: 200
}));

// JSON PARSING
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// ------------ ROUTES (API) ------------ //

app.use('/api/v1/video', routes.video); 
app.use('/api/v1/bts', routes.bts); 
app.use('/api/v1/user', routes.user); 
app.use('/api/v1/auth', routes.auth); 

// ------------ Connection String ------------ //

app.listen(port, () => console.log(`Server is running on port ${port}`));
