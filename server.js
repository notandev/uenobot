const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Bot is running!")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is Ready.")
  })
}

module.exports = keepAlive

// INI SERVER CUMA BISA DIPAKAI DI REPLIT, BIAR BOT NYA BISA IDUP TERUS
// Kalau di index.js gaada const keepAlive , Harus ditambahkan dulu biar bisa dipake
