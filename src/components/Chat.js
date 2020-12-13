/** @format */
import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import '../css/Chat.css'
import InfoBar from './InfoBar'
import Input from './Input'
let socket

const Chat = ({ location }) => {
	const [name, setName] = useState('')
	const [room, setRoom] = useState('')
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState([])
	const ENDPOINT = 'localhost:5000'

	useEffect(() => {
		const { name, room } = queryString.parse(location.search)
		socket = io(ENDPOINT)
		setRoom(room)
		setName(name)
		console.log(name)
		console.log(room)
		console.log(socket)
		socket.emit('join', { name, room }, () => {})

		return () => {
			socket.emit('disconnect')
			socket.off()
		}
	}, [ENDPOINT, location.search])

	useEffect(() => {
		socket.on('message', (message) => {
			setMessages([...messages, message])
		})
	}, [messages])

	//function for sending message
	const sendMessage = (event) => {
		event.preventDefault()
		if (message) {
			socket.emit('sendMessage', message, () => setMessage(''))
		}
	}
	console.log(message, messages)

	return (
		<div className='outerContainer'>
			<div className='container'>
				<InfoBar room={room} />
				{/*<input
					value={message}
					onChange={(event) => setMessage(event.target.value)}
					onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
				/> */}
				<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
			</div>
		</div>
	)
}

export default Chat
