<template>
  <div class="flex justify-center">

    <div class="dt" v-if="getInfo">
      <div class="dt-row">
        <div class="dtc tc">
          <h2>Le prix pour {{ getInfo.typetitle }} est de </h2>
        </div>
      </div>

      <div class="dt-row">
        <div class="dtc tc">
          <h2>{{ getInfo.price }} <strong>MAD</strong> </h2>
        </div>
      </div>
    </div>
    <div class="dt" v-else>
      <div class="dt-row">
        <div class="dtc tc">
          <h2 class="helvetica fw2">Prière de choisir un type de devis avant de venir sur cette page</h2>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    getInfo () {
      return this.$store.getters.getUserdata[this.$store.getters.getUserdata.length - 1]
    }
  }
}
</script>

<style>

</style>
