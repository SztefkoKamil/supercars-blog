import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const state = () => {
  return {
    slides: [
      require('@/assets/images/Lamborghini Aventador SVJ Roadster-3.jpg'),
      require('@/assets/images/Ferrari F8 Tributo-0.jpg'),
      require('@/assets/images/Hennessey Venom F5-2.jpg'),
      require('@/assets/images/Pininfarina Battista-0.jpg')
    ]
  }
}

export const actions = {
  makeFullImagesPaths: (context, images) => {
    const fullPathImages = images.map((img) => {
      const fullPath = process.env.BACKEND_URL + img.url
      img.url = fullPath
      return img
    })
    return fullPathImages
  },

  sortImages: (context, images) => {
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
  },

  divideContent: (context, content) => {
    const dividedContent = content.split('\n\n')
    return dividedContent
  },

  prepareOnePost: async ({ dispatch }, rawPost) => {
    const post = rawPost
    const imagesWithPaths = await dispatch(
      'makeFullImagesPaths',
      rawPost.images
    )
    const sortedImages = await dispatch('sortImages', imagesWithPaths)
    post.images = sortedImages
    post.content = await dispatch('divideContent', post.content)
    return post
  },

  preparePosts: async ({ dispatch }, rawPosts) => {
    const posts = []
    for (const rawPost of rawPosts) {
      const post = await dispatch('prepareOnePost', rawPost)
      posts.push(post)
    }
    return posts
  },

  prepareRestImages: (context, data) => {
    if (data.images.length <= data.contentLength) return []
    return data.images.slice(data.contentLength + 1)
  }
}
