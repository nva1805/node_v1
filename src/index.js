import express from 'express'
import viewEngine from './config/viewEngine'
import APIRoute from './route/api'
import webRoute from './route/web'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

// post data to DB
app.use(express.urlencoded({ extended: true }))
app.use(express.json());  // Parse JSON bodies (as sent by API clients)


viewEngine(app)
webRoute(app)
APIRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})