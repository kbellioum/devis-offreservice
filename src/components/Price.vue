<template>
  <div class="flex justify-center">

    <div class="dt">
      <div class="dt-row">
        <div class="dtc tc">
          <h2>Le prix pour {{ price.split('|')[1] }} est de </h2>
        </div>
      </div>

      <div class="dt-row">
        <div class="dtc tc">
          <h2>{{ price.split('|')[0] }} <strong>MAD</strong> </h2>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: [
    'price'
  ]
}
</script>

<style>

</style>
