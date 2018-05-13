<template>
  <div class="">
      <div class="flex pr7 pl7">
        <div class="flex justify-center w-50 pa3 ml2 mr2">
          <div class="dt-row">
            <img src="img/img01.png" class="mw-100" alt="night sky over water">
          </div>
        </div>
        <div class="flex justify-center w-50 pa3 ml2 mr2">
          <div class="dt pa3 b--solid b--black-30 br2 bw1">
            <div class="dt-row">
              <div class="dtc tc">
                <label class="fl">Nom: </label>
                <input class="input-reset ba b--black-20 pa2 mb2 w-100 br2" type="text" v-model="firstname">
              </div>
            </div>
            <div class="dt-row">
              <div class="dtc tc">
                <label class="fl">Prénom: </label>
                <input class="input-reset ba b--black-20 pa2 mb2 w-100 br2" type="text" v-model="lastname">
              </div>
            </div>
            <div class="dt-row">
              <div class="dtc tc">
                <div class="measure">
                  <label class="fl">Email</label>
                  <input class="input-reset ba b--black-20 pa2 mb2 w-100 br2" type="email" v-model="email">
                </div>
              </div>
            </div>
            <div class="dt-row">
              <div class="dtc tc">
                <div class="measure">
                  <label class="fl">Phone</label>
                  <input class="input-reset ba b--black-20 pa2 mb2 w-100 br2" type="text" v-model="phone">
                </div>
              </div>
            </div>
            <div class="dt-row">
              <div class="dtc tc">
                <label class="fl mb2">Type de cotation: </label>
                <select class="ba b--black-20 pa2 mb2 w-100 br2" v-model='quotationtype'>
                  <option value="WSE">Site web e-commerce</option>
                  <option value="WSC">Site web catalogue</option>
                  <option value="WSI">Site Web Institutionnel</option>
                </select>
              </div>
            </div>

            <div class="dt-row">
              <div class="dtc tc">
                <a class="f6 link dim br2 w-100 pv2 mb2 mt4 dib white bg-dark-blue" href="#0" @click="display">Submit</a>
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
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      quotationtype: '',
      price: '0 000,00'
    }
  },
  methods: {
    display () {
      var type = this.allQuotations.find(item => item.type == this.quotationtype)
      this.price = type.price
      this.$store.dispatch('pushUserData', {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        quote: this.quotationtype
      })
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
