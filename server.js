import express from 'express'
import path from 'path'
import 'dotenv/config'

import { checkBrawler } from './getdata.controller.js'

const PORT = process.env.PORT || 2000
if (PORT === 2000)
    console.warn('WARNING: Unable to read from dotenv file, using default value instead')

const app = express()
app.use(express.static(path.join(import.meta.dirname, 'src')))
app.use(express.json())

app.get('/guess', async (req, res) => {
    try {
        const guessedBrawler = req.query.id
        console.log('got into /guess!')
        const response = await checkBrawler(guessedBrawler)
        console.log('got response from server!')
        res.send(response)
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(PORT, () => console.log(`\nServer running on port [${PORT}]`))
