const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/56521973?s=460&u=fdcfb7f2c627adc5acb808a00cb9994210d5d3ba&v=4",
        name: "Felipe Schiavon",
        role: "Instrutor - Rocketseat",
        description: 'Programador full-stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="http://" target="_blank">Rocketseat</a>',
        link: [
            { name: "Github", url: "https://github.com/FehSchiavon" },
            { name: "Twitter", url: "https://twitter.com/maykbrito?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/felipeschiavon/" }
        ]
    }

    return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: videos })
})

server.listen(5000, function() {
    console.log("server is runnig")
})