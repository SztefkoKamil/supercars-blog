<template>
  <b-list-group-item tag="li" class="border-0 mb-3">
    <b-card
      no-body
      :img-src="postData.images[0].url"
      :img-alt="postData.Title"
      img-top
    >
      <b-card-header>
        <b-card-title>{{ postData.title }}</b-card-title>
        <b-card-sub-title>{{ postData.data }}</b-card-sub-title>
      </b-card-header>
      <b-card-body>
        <b-card-text
          style="max-height:100px; height:min-content; overflow:hidden;"
          >{{ postData.content[0] }}</b-card-text
        >
      </b-card-body>
      <b-card-footer class="d-flex justify-content-between align-items-center">
        <b-card-text class="m-0">{{ postData.author }}</b-card-text>
        <b-button :href="`/post/${postData.id}/`" variant="info">Read</b-button>
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
  }
}
</script>
