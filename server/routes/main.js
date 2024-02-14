const express = require('express')
const router = express.Router()


// routes
router.get("", (req, res) => {

    const locals = {
        title:'Node JS Blog',
        description:'NodeJS blog description',
    }

    res.render('index')
})
router.get("/about", (req, res) => {
    res.render('about')
})


module.exports = router;