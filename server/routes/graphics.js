import getData from '../data.js'
import express from 'express'

const graphics = (function () {
    'use strict'

    const data = getData()
    const router = express.Router()

    router.get('/', (req, res) => {
        res.json(data.gpu)
    })

    router.get('/:filter', (req, res) => {
        const filtered = data.gpu.filter((item) =>
            item.model.toLowerCase().includes(req.params.filter.toLowerCase())
            || item.manufacturer.toLowerCase().includes(req.params.filter.toLowerCase()))
        res.json(filtered)
    })

    router.get('/detail/:id', (req, res) => {
        const filtered = data.gpu.filter((item) => item.id === req.params.id)
        res.json(filtered[0])
    })

    return router
})()

export default graphics