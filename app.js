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

// setup route for index page
app.get(('/'), (req, res) => {
  res.render('index', { restaurant: restaurantList.results })
})

// setup route for show page
app.get(('/restaurants/:restaurant_id'), (req, res) => {

  const restaurant = restaurantList.results.find(item => item.id.toString() === req.params.restaurant_id)
  console.log(restaurant)

  res.render('show', { restaurant: restaurant })
})

// setup server and activate listener
app.listen(port, () => {
  console.log(`Express is now listening to http://localhost:${port}`)
})

