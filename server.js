'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const slugify = require('slugify')
require('dotenv').config()

const port = process.env.PORT || 3000

// create our Express app
const app = express()

// define folder to keep view files
app.set('views', path.join(__dirname, 'views'))

// use Pug as view engine
app.set('view engine', 'pug')

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))

// Home route
app.get('/', (req, res) => {
  res.render('index')
})

// Show form for adding new post
app.get('/posts/create', (req, res) => {
  res.render('post_create')
})

// Process adding post
app.post('/posts', (req, res) => {})

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${port}`)
})