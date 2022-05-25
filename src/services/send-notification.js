async function sendNotification(text) {
	const admins = process.env.ADMINS.split(',')
	for (const chatId of admins) {
		try {
			await this.telegram.sendMessage(chatId, text, {
				parse_mode: 'HTML'
			})
		} catch {
			console.warn(
				`Admin ${chatId} has no chat with bot and/or is invalid`
			)
		}
	}
}

export { sendNotification }
