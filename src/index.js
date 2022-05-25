import { path } from './helpers/path-resolver.js'
import { config as setConfigFile } from 'dotenv'

import { initBot } from './config/bot.js'

setConfigFile({
	path: path(import.meta.url, '../.env')
})

initBot().launch()

console.info('App started')
