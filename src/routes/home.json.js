import { featuredPostQuery } from '$lib/queries'
import { client } from '$lib/sanityClient'

export async function get() {
	// Fetch all valid posts & authors to display in the homepage
	const data = await client.fetch(featuredPostQuery())

	if (data) {
		return {
			status: 200,
			body: data
		}
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	}
}