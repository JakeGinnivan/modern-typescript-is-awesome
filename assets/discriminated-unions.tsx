type Video = {
    type: 'video'
    videoId: string
}

type Article = {
    type: 'article'
    title: string
    body: ArticleBody
}
type Publication = Video | Article
type ArticleBody = ArticleBlock[]
type ArticleBlock = string

const renderPublication = (
    publication: Publication
) => {
    if (publication.type === 'video') {
        // publication is Video
        return `<video data-video-id="${publication.videoId} />`
    }

    // publication is Article
    return `<article>
    <h1>${publication.title}</h1>
${publication.body.map(b => `    <p>${b}</b>`)}
</article>`
}

// error: videoId is missing
renderPublication({ type: 'video' })

// error: title, body is missing
renderPublication({ type: 'article' })