/** @format */

import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import '../css/Messages.css'
import Message from './Message.js'
const Messages = ({ messages, name }) => (
	<div>
		<ScrollToBottom>
			{messages.map((message, i) => (
				<div key={i}>
					<Message message={message} name={name} />
				</div>
			))}
		</ScrollToBottom>
	</div>
)

export default Messages
