import { getDb, modifyDb } from '../services/database.js'
import { sendNotification } from '../services/send-notification.js'

const random = length => Math.floor(Math.random() * length)

async function sendPost() {
	const db = await getDb()
	const itemId = random(db.length)
	const message = db[itemId]
	if (message) {
		await this.telegram.callApi('copyMessage', {
			chat_id: process.env.TARGET,
			from_chat_id: message.chatId,
			message_id: message.messageId
		})
		await modifyDb(db => db.splice(itemId, 1))
	} else {
		await sendNotification.bind(this)(`No cats for sending 😿`)
	}
}

export { sendPost }
