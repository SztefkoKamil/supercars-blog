<template>
  <div class="container-fluid p-0">
    <Hero />
    <main class="container pb-5 pt-3 mt-4">
      <h2 class="text-center mb-3">Recent posts</h2>
      <b-list-group tag="ul">
        <b-list-group-item v-if="fetchError">
          <h3 class="py-3 text-danger">
            <span class="d-block text-center"
              >Sorry, we cannot fetch posts from server.</span
            >
            <span class="d-block text-center mt-2">Some error occured.</span>
            <span class="d-block text-center mt-2"
              >Please try again later.</span
            >
          </h3>
        </b-list-group-item>
        <Post v-for="post in posts" :key="post.id" :post-data="post" />
      </b-list-group>
    </main>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Post from '@/components/Post'

export default {
  components: {
    Hero,
    Post
  },
  async asyncData() {
    const url = process.env.BACKEND_URL + '/posts'

    try {
      const response = await fetch(url)
      const posts = await response.json()
      posts.splice(3)
      return { posts, fetchError: false }
    } catch (err) {
      return { posts: [], fetchError: true }
    }
  }
}
</script>
