<template>
  <NavBar />
  <div>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-image: linear-gradient(to bottom right, rgb(12, 12, 12), rgb(56, 55, 55));
  height: 100vh;
}
</style>
