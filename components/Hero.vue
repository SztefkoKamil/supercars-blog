<template>
  <header class="position-relative">
    <Carousel />
    <div class="title-container">
      <h1>Welcome to the Supercars blog</h1>
      <h4>
        If you love high speed, engine sound and sports line you are in the
        right place!
      </h4>
    </div>
  </header>
</template>

<script>
import Carousel from '@/components/Carousel'

export default {
  components: {
    Carousel
  }
}
</script>

<style scoped>
.title-container {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  background: hsla(0, 0%, 50%, 85%);
  color: #fff;
  padding: 20px 0;
  text-align: center;
  border-radius: 5px;
  margin: 0 calc(35vw - 100px);
}
.title-container h1 {
  font-size: calc(10px + 2vw);
}
.title-container h4 {
  font-size: calc(10px + 0.7vw);
  padding: 0 8vw;
}

@media screen and (min-width: 1200px) {
  .title-container {
    margin: 0 auto;
    width: 560px;
  }
  .title-container h1 {
    font-size: 36px;
  }
  .title-container h4 {
    font-size: 20px;
    padding: 0 80px;
  }
}
</style>
