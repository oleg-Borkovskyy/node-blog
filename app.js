require("dotenv").config()

const express = require("express")

const app = express()
const PORT= 5000 || process.env.PORT

app.get("", (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
    
})