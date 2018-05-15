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
          <h2>Applications Mobiles</h2>
        </div>
      </div>

      <hr>

      <div class="flex justify-center">
        <div class="w-100">
          <div class="fl w-50 pa2">
            <dd class="ma2">
              <input name="type" value="AMC" type="radio" class="mr2" v-model="type"/>
              <label> M-commerce</label>
            </dd>
            <dd class="ma2">
              <input name="type" value="ARE" type="radio" class="mr2" v-model="type"/>
              <label> Réservation en ligne</label>
            </dd>
            <dd class="ma2">
              <input name="type" value="AJM" type="radio" class="mr2" v-model="type"/>
              <label> Jeu mobile</label>
            </dd>
          </div>
          <div class="fl w-50 pa2">
            <dd class="ma2">
              <input name="type" value="AAC" type="radio" class="mr2" v-model="type"/>
              <label> Actualité</label>
            </dd>
            <dd class="ma2">
              <input name="type" value="APA" type="radio" class="mr2" v-model="type"/>
              <label> Petites annonces</label>
            </dd>
            <dd class="ma2">
              <input name="type" value="AUT" type="radio" class="mr2" v-model="type"/>
              <label> Utilitaire</label>
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

      <div class="dt-row" v-if="flag">
        <div class="dtc tc">
          <a class="f6 link dim br2 w-100 pv2 mb2 mt4 dib white bg-dark-blue" @click="display">Submit</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

// *Applications mobiles*     CODE
// - M-commerce               AMC
// - Réservation en ligne     ARE
// - Jeu mobile               AJM
// - Actualité                AAC
// - Petites annonces         APA
// - Utilitaire               AUT

export default {
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      price: '0 000,00',
      flag: false,
      type: '',
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
        case 'AMC':
          this.flag = true
          break;
        case 'ARE':
          this.flag = true
          break;
        case 'AJM':
          this.flag = true
          break;
        case 'AAC':
          this.flag = true
          break;
        case 'APA':
          this.flag = true
          break;
        case 'AUT':
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
