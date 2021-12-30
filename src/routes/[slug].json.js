import { singlePostQuery } from '$lib/queries'
import { client } from '$lib/sanityClient'

export async function get({ params: { slug } }) {
	const post = await client.fetch(singlePostQuery(slug));

	if (post) {
		return {
			status: 200,
			body: {
				post
			}
		};
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}