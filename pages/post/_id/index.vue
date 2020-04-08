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
        <div v-for="i in post.content.length" :key="i" class="mb-4">
          <b-card-text>{{ post.content[i - 1] }}</b-card-text>
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
export default {
  async asyncData({ params, store }) {
    const url = process.env.BACKEND_URL + '/posts/' + params.id
    try {
      const response = await fetch(url)
      const rawPost = await response.json()
      const post = await store.dispatch('prepareOnePost', rawPost)
      const restImages = await store.dispatch('prepareRestImages', {
        images: post.images,
        contentLength: post.content.length
      })
      return { post, restImages, fetchError: false }
    } catch (err) {
      return { fetchError: true }
    }
  }
}
</script>
