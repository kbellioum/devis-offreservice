<template>
  <div class="flex justify-center">

    <div class="dt pa3 b--solid b--black-30 br0 bw0 w-50">

      <div class="dt-row" v-if="error">
        <div class="dtc tc">
          <p class="w-100 ba br2 pa3 ma2 red bg-washed-red" role="alert">
            <span @click="error = false" class="fr cur">X</span>
            <strong>Ooops erreur! </strong> Prière de saisir les informations manquantes correctement.
          </p>
        </div>
      </div>

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
            <div class="">
              <label class="fl">Nom complet </label>
              <input type="text" class="input-reset ba b--black-20 pa2 mb2 w-100 br2" placeholder="Saisir vote nom" name="name" v-model="name"  v-validate="'required|alpha_spaces'">
              <span class="red" v-if="errors.has('name')">
                  {{ errors.first('name') }}
              </span>
            </div>

            <div class="">
              <label class="fl">Email</label>
              <input type="text" class="input-reset ba b--black-20 pa2 mb2 w-100 br2" placeholder="Saisir vote email" name="email" v-model="email" v-validate="'required|email'">
              <span class="red" v-if="errors.has('email')">
                  {{ errors.first('email') }}
              </span>
            </div>
          </div>

          <div class="fl w-50 pa2">
            <div class="">
              <label class="fl">Phone</label>
              <input type="text" class="input-reset ba b--black-20 pa2 mb2 w-100 br2" placeholder="Saisir vote numéro de mobile" name="phone" v-model="phone" v-validate="'required|numeric'">
              <span class="red" v-if="errors.has('phone')">
                  {{ errors.first('phone') }}
              </span>
            </div>
          </div>
        </div>

      </section>
      <section v-if="priceflag">
        <h2>Le prix pour  {{ typetxt }} est de </h2>
      </section>

      <div class="dt-row" v-if="flag">
        <div class="dtc tc">
          <a class="f6 link dim br2 w-100 pv2 mb2 mt4 dib white bg-dark-blue" @click="display">Submit</a>
        </div>
      </div>
      <hr>
      <div class="dt-row" v-if="priceflag">
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
      type: '',
      priceflag: false,
      typetxt: '',
      error: false
    }
  },
  methods: {
    display () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          var type = this.allQuotations.find(item => item.type == this.type)
          this.price = type.price
          this.typetxt = type.title
          this.$store.dispatch('pushUserData', {
            name: this.name,
            email: this.email,
            phone: this.phone,
            quote: this.type,
            typetitle: this.typetxt,
            price: this.price
          })
          this.priceflag = true
          this.flag = false
          this.error = false
          this.$router.push('/price')
          return;
        }
        this.error = true
      });
    }
  },
  watch: {
    type: function (value) {

      switch (value) {
        case 'SWV':
          this.flag = true
          this.priceflag = false
          break;
        case 'SWE':
          this.flag = true
          this.priceflag = false
          break;
        case 'SWB':
          this.flag = true
          this.priceflag = false
          break;
        case 'SWF':
          this.flag = true
          this.priceflag = false
          break;
        default:
          this.flag = true
          this.priceflag = false
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
.cur {
  cursor: pointer;
}
</style>
