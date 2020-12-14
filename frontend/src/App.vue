<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <navbar />
  </div>
  <router-view />
</template>


<script>
import Navbar from './components/Navbar.vue'
export default {
    components: {
      Navbar
    }
}

</script>
<style lang="scss">
</style>
