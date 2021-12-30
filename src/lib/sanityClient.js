import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID,
      dataset = import.meta.env.VITE_SANITY_DATASET,
      apiVersion = import.meta.env.VITE_SANITY_VERSION

const client = sanityClient({ projectId, dataset, apiVersion, useCdn: true, })

const builder = imageUrlBuilder(client)

const urlFor = (source) => {
  return builder.image(source)
}

export { client, urlFor }