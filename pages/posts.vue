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
  data() {
    return {
      posts: [
        {
          id: 'gsedfgerfgdfgsdgf',
          title: 'Lamborghini Aventador SVJ Roadster',
          author: 'Stephan King',
          date: '03-04-2020',
          images: ['https://picsum.photos/1024/576/?image=28'],
          text: [
            'Lamborghini debuted its new Aventador SVJ Roadster at the Geneva Motor Show. While the car’s performance specs are more or less the same as the coupe version of the car, the convertible top gives it a look that’s truly its own. The removable roof features a two-piece design and is made of carbon fiber. Once removed, it fits securely in the frunk of the mid-engine vehicle.'
          ]
        },
        {
          id: 'sdgtehgyefasdg',
          title: 'Second post',
          author: 'Stephan King',
          date: '05-04-2020',
          images: ['https://picsum.photos/1024/576/?image=26'],
          text: [
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus totam quae magnam voluptatum libero magni ratione repellat vero saepe nesciunt delectus voluptatem praesentium dolor consectetur deleniti illo, voluptates dolorum? Dolorum facere quasi, neque in obcaecati explicabo tenetur ipsum quos dicta, accusantium ex? Architecto est unde, obcaecati, beatae molestiae dolorem labore nesciunt sint voluptas dignissimos excepturi officia ipsum! Ab, exercitationem! Sed similique corrupti debitis, minus laborum neque ratione ipsam suscipit, voluptatem fugiat adipisci fugit recusandae in vero reiciendis nemo quisquam. Delectus ea aliquid rem ab quia veritatis, consequatur consectetur nihil! Cupiditate aliquam molestias ipsum voluptatibus consequatur quo. Enim repellendus modi tempora, aspernatur minima, eos necessitatibus dolorum mollitia magnam molestias culpa odit cum, soluta voluptatibus ullam obcaecati quas! Rerum, fugiat rem.'
          ]
        }
      ]
    }
  }
}
</script>
