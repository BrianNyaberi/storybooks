const express = require('express')
const dotenv = require('dotenv')

// Load the config file
dotenv.config({path:'./config/config.env'})

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))