/* eslint eqeqeq: "off" */
import { requestValidator } from '../utils'
import { list } from "../../data/docs"


export default [

	// index
	requestValidator("get", '/api/docs', (req, res, ctx) => {
		return res(
			ctx.delay(500),
			ctx.status(200),
			ctx.json(list)
		)
	}),

	// get
	requestValidator("get", '/api/docs/:id', (req, res, ctx) => {
		if (req.cookies.token == null) return res(ctx.status(401))
		const id = req.params.id

		const doc = list.find(item=>item.id==id)
		if ( !doc ) return res(ctx.status(404))
		
		return res(
			ctx.delay(500),
			ctx.status(200),
			ctx.json(doc)
		)
	}),


]