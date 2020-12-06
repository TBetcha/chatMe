/** @format */

// Server config - prob just put in new file
const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 5000
const router = require('./router')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
// end server config

io.on('connection', (socket) => {
	console.log('we have a new connection!!! WOOHOOOO!')

	socket.on('join', ({ name, room }, callback) => {
		console.log(name, room)
	})

	socket.on('disconnect', () => {
		console.log('User left the connection!')
	})
})

app.use(router)

server.listen(PORT, () => console.log(`Server has started on ${PORT}`))
