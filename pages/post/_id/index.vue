<template>
  <main class="container py-5">
    <b-card v-if="fetchError">
      <b-card-header>
        <b-card-title title-tag="h3" class="text-danger">
          <span class="d-block text-center"
            >Sorry, we cannot fetch post from server.</span
          >
          <span class="d-block text-center mt-2">Some error occured.</span>
          <span class="d-block text-center mt-2">Please try again later.</span>
        </b-card-title>
      </b-card-header>
    </b-card>
    <b-card
      v-else
      no-body
      :img-src="post.images[0].url"
      :img-alt="post.Title"
      img-top
    >
      <b-card-header>
        <b-card-title title-tag="h1" class="text-center">{{
          post.title
        }}</b-card-title>
      </b-card-header>
      <b-card-body>
        <div v-for="i in post.text.length" :key="i" class="mb-4">
          <b-card-text>{{ post.text[i - 1] }}</b-card-text>
          <b-card-img :src="post.images[i].url" :alt="post.title"></b-card-img>
        </div>
        <b-card-img
          v-for="img in restImages"
          :key="img.id"
          :src="img.url"
          :alt="post.title"
          class="mb-4"
        ></b-card-img>
      </b-card-body>
      <b-card-footer
        class="d-flex justify-content-between align-items-center py-4"
      >
        <b-card-text class="m-0">{{ post.data }}</b-card-text>
        <b-card-text>{{ post.author }}</b-card-text>
      </b-card-footer>
    </b-card>
  </main>
</template>

<script>
const makeFullImagesPaths = (images) => {
  const fullPathImages = images.map((img) => {
    const fullPath = process.env.BACKEND_URL + img.url
    img.url = fullPath
    return img
  })
  return fullPathImages
}

const sortImages = (images) => {
  const numbered = images.map((img) => {
    const dotIndex = img.name.lastIndexOf('.')
    const extTrimed = img.name.slice(0, dotIndex)
    const dashIndex = extTrimed.lastIndexOf('-')
    img.nr = extTrimed.slice(dashIndex + 1)
    return img
  })
  const sorted = numbered.sort((a, b) => {
    return +a.nr - +b.nr
  })
  return sorted
}

const divideContent = (content) => {
  const dividedContent = content.split('\n\n')
  return dividedContent
}

const preparePost = (rawPost) => {
  const post = rawPost
  const imagesWithPaths = makeFullImagesPaths(rawPost.images)
  const sortedImages = sortImages(imagesWithPaths)
  post.images = sortedImages
  post.text = divideContent(post.content)
  return post
}

const prepareRestImages = (images, textLength) => {
  if (images.length <= textLength) return []
  return images.slice(textLength + 1)
}

export default {
  async asyncData({ params, app }) {
    const url = process.env.BACKEND_URL + '/posts/' + params.id

    try {
      const response = await fetch(url)
      const rawPost = await response.json()
      const post = preparePost(rawPost)
      const restImages = prepareRestImages(post.images, post.text.length)
      return { post, restImages, fetchError: false }
    } catch (err) {
      return { fetchError: true }
    }
  }
}
</script>
