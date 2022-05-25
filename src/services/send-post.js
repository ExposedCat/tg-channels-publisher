function sendPost(message) {
	return this.telegram.callApi('copyMessage', {
		chat_id: process.env.TARGET,
		from_chat_id: message.chatId,
		message_id: message.messageId
	})
}

export { sendPost }
