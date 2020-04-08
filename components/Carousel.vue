<template>
  <b-carousel
    id="carousel-1"
    :interval="3000"
    background="#ababab"
    img-width="1920"
    img-height="1080"
  >
    <b-carousel-slide
      v-for="(slide, i) in $store.state.slides"
      :key="i"
      :img-src="slide"
    ></b-carousel-slide>
  </b-carousel>
</template>
