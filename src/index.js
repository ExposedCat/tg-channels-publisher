import { path } from './helpers/path-resolver.js'
import { config as setConfigFile } from 'dotenv'

import { initBot } from './config/bot.js'
import { runScheduler } from './config/scheduler.js'

setConfigFile({
	path: path(import.meta.url, '../.env')
})

const bot = initBot()
bot.launch()
// runScheduler(bot)

console.info('App started')
