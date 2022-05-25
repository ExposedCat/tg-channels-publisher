async function isAdmin(ctx, next) {
	const userId = `${ctx.from.id}`
	const admins = process.env.ADMINS
	if (!admins.includes(userId)) {
		return
	}
	await next()
}

export { isAdmin }
