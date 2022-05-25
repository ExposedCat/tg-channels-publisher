import { getDb, modifyDb } from '../services/database.js'
import { sendPost } from '../services/send-post.js'
import { sendNotification } from '../services/send-notification.js'

const random = length => Math.floor(Math.random() * length)

async function handleStartCommand(ctx) {
	const db = await getDb()
	const itemId = random(db.length)
	const message = db[itemId]
	if (message) {
		await sendPost.bind(ctx)(message)
		await modifyDb(db => db.splice(itemId, 1))
	} else {
		await sendNotification.bind(ctx)(`No cats for sending 😿`)
	}
}

export { handleStartCommand }
