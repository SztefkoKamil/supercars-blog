<template>
  <main class="container pb-5">
    <h1 class="text-center my-4">All posts for supercars fans</h1>
    <b-list-group tag="ul">
      <Post v-for="post in posts" :key="post.id" :post-data="post" />
    </b-list-group>
  </main>
</template>

<script>
import Post from '@/components/Post'

export default {
  components: {
    Post
  },
  async asyncData() {
    const url = process.env.BACKEND_URL + '/posts'

    try {
      const response = await fetch(url)
      const posts = await response.json()
      return { posts }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
