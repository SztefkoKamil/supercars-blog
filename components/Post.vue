<template>
  <b-list-group-item tag="li" class="border-0 mb-3">
    <b-card no-body :img-src="imgURL" :img-alt="postData.Title" img-top>
      <b-card-header>
        <b-card-title>{{ postData.title }}</b-card-title>
        <b-card-sub-title>{{ postData.data }}</b-card-sub-title>
      </b-card-header>
      <b-card-body>
        <b-card-text
          style="max-height:100px; height:min-content; overflow:hidden;"
          >{{ content }}</b-card-text
        >
      </b-card-body>
      <b-card-footer class="d-flex justify-content-between align-items-center">
        <b-card-text class="m-0">{{ postData.author }}</b-card-text>
        <b-button :href="`post/${postData.id}`" variant="info">Read</b-button>
      </b-card-footer>
    </b-card>
  </b-list-group-item>
</template>

<script>
export default {
  props: {
    postData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imgURL: '',
      content: ''
    }
  },
  beforeMount() {
    const img = this.returnFirstImage()
    this.imgURL = process.env.BACKEND_URL + img.url
    this.content = this.postData.content.split('\n\n')[0]
  },
  methods: {
    returnFirstImage() {
      const numbered = this.postData.images.map((img) => {
        const dotIndex = img.name.lastIndexOf('.')
        const extTrimed = img.name.slice(0, dotIndex)
        const dashIndex = extTrimed.lastIndexOf('-')
        img.nr = extTrimed.slice(dashIndex + 1)
        return img
      })

      const sorted = numbered.sort((a, b) => {
        return +a.nr - +b.nr
      })
      return sorted[0]
    }
  }
}
</script>
