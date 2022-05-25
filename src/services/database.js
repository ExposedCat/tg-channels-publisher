import fs from 'fs/promises'

import { path } from '../helpers/path-resolver.js'

const getDbPath = () => path(import.meta.url, `../../${process.env.DB_NAME}`)

async function getDb() {
	const filePath = getDbPath()
	let db
	try {
		const plainDb = await fs.readFile(filePath, 'utf-8')
		db = JSON.parse(plainDb)
	} catch ({ message: error }) {
		console.warn(`Error while geeting DB: ${error}`)
		db = []
	}
	return db
}

async function modifyDb(func) {
	const db = await getDb()
	await func(db)
	const packedDb = JSON.stringify(db)
	const filePath = getDbPath()
	await fs.writeFile(filePath, packedDb, 'utf-8')
}

export { getDb, modifyDb }
