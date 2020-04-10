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
    <b-btn
      pill
      variant="danger"
      class="position-fixed p-1"
      style="left:20px; bottom:30px;"
      @click="back"
    >
      <svg
        class="bi bi-arrow-left-short"
        width="34px"
        height="34px"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
          clip-rule="evenodd"
        />
        <path
          fill-rule="evenodd"
          d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z"
          clip-rule="evenodd"
        />
      </svg>
    </b-btn>
  </main>
</template>

<script>
let postTitle = ''

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
      postTitle = post.title

      return { post, restImages, fetchError: false }
    } catch (err) {
      return { fetchError: true }
    }
  },
  methods: {
    back() {
      history.back()
    }
  },
  head() {
    return {
      title: postTitle + ' - Supercars blog'
    }
  }
}
</script>
