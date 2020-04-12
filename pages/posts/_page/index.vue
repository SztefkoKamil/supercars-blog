<template>
  <main class="container pb-5">
    <h1 class="text-center my-4">See our supercars!</h1>
    <b-list-group tag="ul">
      <b-list-group-item v-if="fetchError">
        <h3 class="py-3 text-danger">
          <span class="d-block text-center"
            >Sorry, we cannot fetch posts from server.</span
          >
          <span class="d-block text-center mt-2">Some error occured.</span>
          <span class="d-block text-center mt-2">Please try again later.</span>
        </h3>
      </b-list-group-item>
      <Post v-for="post in posts" :key="post.id" :post-data="post" />
    </b-list-group>
    <b-pagination-nav
      :link-gen="linkGen"
      align="center"
      limit="3"
      :number-of-pages="pages"
      :pills="true"
      use-router
    ></b-pagination-nav>
  </main>
</template>

<script>
import Post from '@/components/Post'

export default {
  components: {
    Post
  },
  async asyncData({ store, params }) {
    const postsPerPage = 5
    const start = (params.page - 1) * postsPerPage
    const getPostsUrl = `${process.env.BACKEND_URL}/posts?_start=${start}&_limit=${postsPerPage}`
    const countPostsUrl = process.env.BACKEND_URL + '/posts/count'

    try {
      const postsRes = await fetch(getPostsUrl)
      const rawPosts = await postsRes.json()
      const posts = await store.dispatch('preparePosts', rawPosts)

      const countRes = await fetch(countPostsUrl)
      const allPosts = await countRes.json()
      const pages = Math.ceil(allPosts / postsPerPage)

      return {
        posts,
        pages,
        fetchError: false
      }
    } catch (err) {
      return { posts: [], fetchError: true }
    }
  },
  methods: {
    linkGen(pageNum) {
      return `/posts/${pageNum}`
    }
  },
  head() {
    return {
      title: 'Posts - Supercars blog'
    }
  }
}
</script>
