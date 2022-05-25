import { getDb } from '../services/database.js'

async function handleStartCommand(ctx) {
	const db = await getDb()
	if (db.length) {
		await ctx.replyWithHTML(
			`Hey, ${ctx.from.first_name}!\nCats left: <b>${db.length}</b> 😸`
		)
	} else {
		await ctx.replyWithHTML(
			`${ctx.from.first_name}, there is no cats left! 😿`
		)
	}
}

export { handleStartCommand }
