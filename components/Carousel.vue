<template>
  <b-carousel
    id="carousel-1"
    :interval="3000"
    background="#ababab"
    img-width="1920"
    img-height="1080"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide
      v-for="(slide, i) in slides"
      :key="i"
      :img-src="slide"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      sliding: null,
      slides: [
        'https://picsum.photos/1024/576/?image=52',
        'https://picsum.photos/1024/576/?image=54',
        'https://picsum.photos/1024/576/?image=58',
        'https://picsum.photos/1024/576/?image=55'
      ]
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
