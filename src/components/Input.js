/** @format */
import React from 'react'
import '../css/Input.css'
const Input = ({ message, setMessage, sendMessage }) => {
	return (
		<div>
			<form>
				<input
					className='input'
					type='text'
					placeholder='Type a message...'
					value={message}
					onChange={(event) => setMessage(event.target.value)}
					onKeyPress={(event) => (event.eky === 'Enter' ? sendMessage(event) : null)}
				/>
				<button className='sendButton' onClick={(event) => sendMessage(event)}>
					Send
				</button>
			</form>
		</div>
	)
}

export default Input
