const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 5000


app.listen(port, ()=>{console.log('connet with the port', port)})