<template>
  <b-navbar toggleable="md" fixed="top" type="dark" variant="dark">
    <b-navbar-brand href="/">Supercars blog</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="justify-content-end">
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/posts/1">Posts</b-nav-item>
        <b-nav-item href="/about/">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="css" scoped>
.navbar {
  min-height: 70px;
  align-items: flex-start;
}

.navbar > a {
  font-size: 28px;
}

.navbar-toggler {
  margin-top: 7px;
}

.navbar ul a {
  text-align: right;
  font-size: 24px;
  margin-right: 1rem;
}
</style>
