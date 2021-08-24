exports.linkResolver = (doc) => {
  // URL for a category type
  //if (doc.type === 'category') {
  //  return `/category/${doc.uid}`
  //}

  // URL for a product type
  if (doc.type === 'post') {
    return `/blog/${doc.uid}`
  }

  // Backup for all other types
  return '/'
}