<template>
  <main class="container py-5">
    <b-card no-body :img-src="post.images[0]" :img-alt="post.Title" img-top>
      <b-card-header>
        <b-card-title title-tag="h1" class="text-center">{{
          post.title
        }}</b-card-title>
      </b-card-header>
      <b-card-body>
        <div v-for="i in post.text.length" :key="i" class="mb-4">
          <b-card-text>{{ post.text[i - 1] }}</b-card-text>
          <b-card-img :src="post.images[i]" :alt="post.title"></b-card-img>
        </div>
        <b-card-img
          v-for="(img, i) in restImages"
          :key="i + img"
          :src="img"
          :alt="post.title"
          class="mb-4"
        ></b-card-img>
      </b-card-body>
      <b-card-footer
        class="d-flex justify-content-between align-items-center py-4"
      >
        <b-card-text class="m-0">{{ post.date }}</b-card-text>
        <b-card-text>{{ post.author }}</b-card-text>
      </b-card-footer>
    </b-card>
  </main>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: 'gsedfgerfgdfgsdgf',
        title: 'Lamborghini Aventador SVJ Roadster',
        author: 'Stephan King',
        date: '03-04-2020',
        images: [
          require('@/assets/images/Ferrari F8 Tributo-0.jpg'),
          require('@/assets/images/Pininfarina Battista-0.jpg'),
          require('@/assets/images/Ferrari F8 Tributo-0.jpg'),
          require('@/assets/images/Pininfarina Battista-0.jpg'),
          'https://i.picsum.photos/id/28/1024/576.jpg',
          'https://i.picsum.photos/id/29/1024/576.jpg',
          'https://i.picsum.photos/id/30/1024/576.jpg'
        ],
        text: [
          'Lamborghini debuted its new Aventador SVJ Roadster at the Geneva Motor Show. While the car’s performance specs are more or less the same as the coupe version of the car, the convertible top gives it a look that’s truly its own. The removable roof features a two-piece design and is made of carbon fiber. Once removed, it fits securely in the frunk of the mid-engine vehicle.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales tristique arcu. Cras maximus eleifend metus, eu posuere nibh sodales eu. Mauris sed enim purus. Curabitur non odio non ante pulvinar dignissim. Aenean sed tellus consectetur, pharetra quam eget, condimentum ligula. Nullam semper quis ante nec dignissim. Aliquam a tincidunt enim. Maecenas vel felis neque. Nam sit amet sapien lorem.',
          'Aliquam tristique blandit dignissim. Aliquam magna tortor, commodo nec massa sit amet, blandit rutrum est. Maecenas finibus non velit nec aliquet. Ut cursus ultricies porta. Sed fringilla varius lacinia. Maecenas ultrices vestibulum quam, nec mollis mi. Donec augue augue, hendrerit quis pharetra eu, mattis ac enim. Fusce vitae orci pellentesque, dignissim lectus id, vehicula mi.'
        ]
      },
      restImages: []
    }
  },
  beforeMount() {
    const images = [...this.post.images]
    images.splice(0, this.post.text.length + 1)
    this.restImages = images
  }
}
</script>
