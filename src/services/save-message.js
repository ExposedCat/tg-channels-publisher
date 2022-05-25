import { modifyDb } from './database.js'

async function saveMessage(chatId, messageId) {
	await modifyDb(db =>
		db.push({
			chatId,
			messageId
		})
	)
}

export { saveMessage }
