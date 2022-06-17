const express = require('express') //access express framework for route
const app = express() //activate express
const exphbs = require('express-handlebars') //access handlebars for template engine
const port = 3000

// setup handlebars engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setup route
app.get(('/'), (req, res) => {
  res.render('index')
})

// setup server and activate listener
app.listen(port, () => {
  console.log(`Express is now listening to http://localhost:${port}`)
})

