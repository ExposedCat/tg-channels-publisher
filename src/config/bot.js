import Telegraf from 'telegraf'

import { processError } from '../helpers/global-errors-processor.js'

import { handleStartCommand } from '../handlers/start.js'
import { handleMessage } from '../handlers/any.js'

import { isAdmin } from '../middlewares/is-admin.js'

function initBot() {
	const bot = new Telegraf(process.env.TOKEN)

	bot.use(isAdmin)

	bot.start(handleStartCommand)
	bot.on('message', handleMessage)

	bot.catch(processError)

	return bot
}

export { initBot }
