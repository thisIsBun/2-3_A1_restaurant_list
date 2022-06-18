const express = require('express') //access express framework for route
const exphbs = require('express-handlebars') //access handlebars for template engine
const restaurantList = require('./restaurant.json')
const app = express() //activate express
const port = 3000

// setup handlebars engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setup static files for express
app.use(express.static('public'))

// setup route
app.get(('/'), (req, res) => {
  res.render('index', { restaurant: restaurantList.results })
})

// setup server and activate listener
app.listen(port, () => {
  console.log(`Express is now listening to http://localhost:${port}`)
})

