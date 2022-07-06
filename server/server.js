import express from 'express'
import graphics from './routes/graphics.js'

const PORT = process.env.PORT || 3001

const app = express()

const routes = {
    graphics
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use('/graphics/graphics-cards', routes.graphics)

app.use(function (err, req, res, next) {
    res.status(500).send('Internal Server Error')
})

app.listen(PORT)
console.log('API running on localhost:' + PORT)