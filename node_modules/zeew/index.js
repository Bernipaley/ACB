const {sfw} = require('./src/sfw.js')
const img = require('./src/img');
const {Bienvenida} = require("./src/bienvenida/Bienvenida.js")
const {WelcomeZeew}= require("./src/bienvenida/WelcomeZeew.js")

module.exports = {
    Bienvenida,
    WelcomeZeew,
    sfw,
    img
}