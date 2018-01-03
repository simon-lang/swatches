import * as express from 'express'
const fs = require('fs')
const path = require('path')

const PORT = 1337

const app = express()

import data from '../data'

import cors from './middleware/cors'

app.use('/', express.static(path.resolve('./dist')))
app.use(cors)

app.get('/:name', (req, res) => {
    const name = req.params.name
    res.send(data.filter(d => d.name === name))
})

app.listen(PORT)

console.log('Server listening on', PORT);
