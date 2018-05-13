<template>
  <div id="app">
    <nav class="pa3 pa4-ns">
      <a class="link dim black b fw1 f1 tc db mb3 mb4-ns" href="#" title="Home">Devis</a>
      <Menu />
    </nav>

    <main>
      <router-view></router-view>
    </main>



  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
