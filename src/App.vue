<template>
  <div id="app" class="fl w-100">
    <nav class="fl w-100 pv2 bg-near-white tc">
      <a class="link dim black f4" href="/" title="Offre Devis">Offre Devis</a>
    </nav>
    <div class="fl w-100 ph7-ns pv5-ns">
      <Menu />
    </div>
    <main class="fl w-100 ph7-ns">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  components: {
    Menu
  },
  metaInfo: {
      title: 'Offre de Devis MM',
      titleTemplate: '%s | Offre de service'
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
