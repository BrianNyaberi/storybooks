const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs  = require('express-handlebars')
const passport  = require('passport')
const session  = require('express-session')
const connectDB = require('./config/db')
const { session } = require('passport/lib')

// Load the config file
dotenv.config({path:'./config/config.env'})

// passport config
require('./config/passport')(passport)

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

// sessions
app.use(
    session({
        secret: 'keyboard cut',
        resave: false,
        saveUninitialized: false
    })
)

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes 
app.use('/', require('./routes/index'))
const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
