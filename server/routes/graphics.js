import getData from '../data.js'
import express from 'express'

const graphics = (function () {
    'use strict'

    const data = getData()
    const router = express.Router()

    router.get('/', (req, res) => {
        const page = parseInt(req.query.page) || 0
        const limit = parseInt(req.query.limit) || 20
        if (page * limit >= data.gpu) return []
        /** This would be aproached differently if working in a real DB environment */
        res.json(data.gpu.slice(page * limit, page * limit + limit - 1))
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