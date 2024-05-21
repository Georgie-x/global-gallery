function aicSearch(keyword: string): string{
    return `https://api.artic.edu/api/v1/artworks/search?q=${keyword}&query[term][is_public_domain]=true`
}

export default aicSearch