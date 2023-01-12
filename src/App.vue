<template>
  <NavBar />
  <router-view />
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
  background-color: rgb(12, 68, 78);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;

  img {
    width: 40px;
    height: 40px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .right {
    a {
      margin-left: 30px;
      margin-top: 15px;
    }
  }

}
</style>
