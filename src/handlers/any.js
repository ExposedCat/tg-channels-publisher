import { saveMessage } from '../services/save-message.js'

async function handleMessage(ctx) {
	await saveMessage(ctx.chat.id, ctx.message.message_id)
}

export { handleMessage }
