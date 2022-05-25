import time from 'node-schedule'

import { sendPost } from '../services/send-post.js'

function runScheduler(bot) {
	console.log('Scheduler started')
	time.scheduleJob(process.env.TIME_RULE, async () => {
		console.log('Job started')
		await sendPost.bind(bot)()
	})
}

export { runScheduler }
