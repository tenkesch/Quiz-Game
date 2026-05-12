import express from 'express'
import path from 'path'
import 'dotenv/config'
const PORT = process.env.PORT || 2000
if (PORT === 2000)
    console.warn('WARNING: Unable to read from dotenv file, using default value instead')

const app = express()
app.use(express.static(path.join(import.meta.dirname, 'src')))
app.use(express.json())

app.listen(PORT, () => console.log(`\nServer running on port [${PORT}]`))
