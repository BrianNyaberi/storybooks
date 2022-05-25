const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs  = require('express-handlebars')
const connectDB = require('./config/db')

// Load the config file
dotenv.config({path:'./config/config.env'})


// database connection
connectDB()

const app = express()

// loggin
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Express Handlebars
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'}) )
app.set('view engine', '.hbs')


// Routes 
app.use('/', require('./routes/index'))
const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
