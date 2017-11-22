'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const slugify = require('slugify')
const Feeds = require('pusher-feeds-server')
require('dotenv').config()

const port = process.env.PORT || 3000
const textSyncInstanceLocator = process.env.TEXT_SYNC_INSTANCE_LOCATOR
const feedsInstanceLocator = process.env.FEEDS_INSTANCE_LOCATOR
const feedsSecretKey = process.env.FEEDS_SECRET_KEY

// create our Express app
const app = express()

// define folder to keep view files
app.set('views', path.join(__dirname, 'views'))

// use Pug as view engine
app.set('view engine', 'pug')

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))

// Home route
app.get('/', async (req, res) => {
  res.render('index', { feedsInstanceLocator })
})

// Show form for adding new post
app.get('/posts/create', (req, res) => {
  res.render('post_create', { textSyncInstanceLocator })
})

// Process adding post
app.post('/posts', async (req, res) => {
  // Feeds instance
  const feeds = new Feeds({
    instanceLocator: feedsInstanceLocator,
    key: feedsSecretKey
  })

  const post = {
    title: req.body.title,
    slug: slugify(req.body.title, { lower: true }),
    content: req.body.content
  }

  // publish post to feeds
  feeds.publish('post', { post })

  res.redirect('/')
})

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${port}`)
})