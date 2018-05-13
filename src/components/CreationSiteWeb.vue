<template>
  <div class="flex justify-center">

    <div class="dt pa3 b--solid b--black-30 br0 bw0 w-50">
      <div class="dt-row">
        <div class="dtc tc">
          <h2>Creation de site web</h2>
        </div>
      </div>

      <hr>

      <div class="flex justify-center">
        <div class="w-100">
          <div class="fl w-50 pa2">
            <dd class="ma2">
              <input name="type" value="SWV" type="radio" class="mr2" v-model="type"/>
              <label> Site vitrine (présentation)</label>
            </dd>
            <dd class="ma2">
              <input name="type" value="SWE" type="radio" class="mr2" v-model="type"/>
              <label> Site e-commerce (vente)</label>
            </dd>
            <dd class="ma2">
              <input name="type" value="SWB" type="radio" class="mr2" v-model="type"/>
              <label> Blog (actualité)</label>
            </dd>
          </div>
          <div class="fl w-50 pa2">
            <dd class="ma2">
              <input name="type" value="SWF" type="radio" class="mr2" v-model="type"/>
              <label> Forum (communauté)</label>
            </dd>
          </div>
        </div>
      </div>
      <hr>

      <section v-if="flag">
        <div class="w-100">
          <div class="fl w-50 pa2">
            <label class="fl">Nom complet </label>
            <input class="input-reset ba b--black-20 pa2 mb2 w-100 br2" type="text" v-model="name">
            <label class="fl">Email</label>
            <input class="input-reset ba b--black-20 pa2 mb2 w-100 br2" type="email" v-model="email">
          </div>
          <div class="fl w-50 pa2">
            <label class="fl">Phone</label>
            <input class="input-reset ba b--black-20 pa2 mb2 w-100 br2" type="text" v-model="phone">
          </div>
        </div>

      </section>

      <div class="dt-row">
        <div class="dtc tc">
          <a class="f6 link dim br2 w-100 pv2 mb2 mt4 dib white bg-dark-blue" @click="display">Submit</a>
        </div>
      </div>
      <hr>
      <div class="dt-row">
        <div class="dtc tc">
          <p class="sans-serif fw1 f1 mt0 mb2">{{ price }}</p>
          <p class="helvetica f2 fw4 ma0">MAD</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// *Création de site web*             CODE
// - Site vitrine (présentation)      SWV
// - Site e-commerce (vente)          SWE
// - Blog (actualité)                 SWB
// - Forum (communauté)               SWF

export default {
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      price: '0 000,00',
      flag: false,
      type: ''
    }
  },
  methods: {
    display () {
      var type = this.allQuotations.find(item => item.type == this.type)
      this.price = type.price
      this.$store.dispatch('pushUserData', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        quote: this.type
      })
    }
  },
  watch: {
    type: function (value) {

      switch (value) {
        case 'SWV':
          this.flag = true
          break;
        case 'SWE':
          this.flag = true
          break;
        case 'SWB':
          this.flag = true
          break;
        case 'SWF':
          this.flag = true
          break;
        default:
          this.flag = true
      }
    }
  },
  computed: {
    allQuotations () {
        return this.$store.getters.getQoutes
      }
  }
}
</script>

<style>

</style>
