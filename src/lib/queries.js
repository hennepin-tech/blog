export function allPostsQuery() {
	return /* groq */ `*[
    _type == "post" &&
    defined(slug.current) &&
    publishedAt < now()
  ] | order(publishedAt desc) {
    title,
    slug,
    mainImage,
    publishedAt,
    'excerpt': body[0].children[0].text
  }`;
}

export function singlePostQuery(slug) {
  return /* groq */ `
    *[_type == "post" && slug.current == "${slug}"][0]{ 
      _updatedAt,
      title, 
      body,
      slug, 
      author -> {
        name
      }, 
      publishedAt, 
      mainImage,
      relatedProgram -> {
        programName,
        pageLink,
        image
      }
    } 
  `;
}

export function featuredPostQuery() {
  return /* groq */ `
    *[_type == "blogHomepage"][0]{ 
      featuredPost -> { 
        title, 
        slug, 
        author -> {
          name
        }, 
        publishedAt, 
        mainImage 
      } 
    }
  `;
}

export function allCatsQuery() {
  return /* groq */ `

  `
}