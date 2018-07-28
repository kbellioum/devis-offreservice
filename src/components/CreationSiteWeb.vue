<template>
  <div class="fl w-100">
    <div class="" v-if="error">
      <div class="">
        <p class="w-100 ba br2 pa3 ma2 red bg-washed-red" role="alert">
          <span @click="error = false" class="fr pointer">X</span>
          <strong>Ooops erreur! </strong> Prière de saisir les informations manquantes correctement.
        </p>
      </div>
    </div>
    <h3 class="bg-near-white f5 dark-gray ph2 pv3">2. Choisissez le type du site web</h3>
    <div class="fl w-100">
      <div class="fl w-100 pv2">
        <input name="type" value="SWV" type="radio" class="mr2" v-model="type"/>
        <label class="f5">Site vitrine (présentation)</label>
      </div>
      <div class="fl w-100 pv2">
        <input name="type" value="SWE" type="radio" class="mr2" v-model="type"/>
        <label class="f5">Site e-commerce (vente)</label>
      </div>
      <div class="fl w-100 pv2">
        <input name="type" value="SWB" type="radio" class="mr2" v-model="type"/>
        <label class="f5">Blog (actualité)</label>
      </div>
      <div class="fl w-100 pv2">
        <input name="type" value="SWF" type="radio" class="mr2" v-model="type"/>
        <label class="f5">Forum (communauté)</label>
      </div>
    </div>
    <section v-if="flag">
      <div class="fl w-100 pv5">
        <h3 class="bg-near-white f5 dark-gray ph2 pv3">3. Remplissez le formulaire de contact pour recevoir les meilleurs devis du marché!</h3>
        <div class="fl w-100">
          <div class="fl w-50 pv3">
            <label class="f5 db pb2">Nom</label>
            <input type="text" class="input-reset ba b--black-20 ph2 pv3 w-100 br2" name="name" v-model="name"  v-validate="'required|alpha_spaces'">
            <span class="pv2 red" v-if="errors.has('name')">
              {{ errors.first('name') }}
            </span>
          </div>
        </div>
        <div class="fl w-100">
          <div class="fl w-50 pv3">
            <label class="f5 db pb2">E-mail</label>
            <input type="text" class="input-reset ba b--black-20 ph2 pv3 w-100 br2" name="email" v-model="email" v-validate="'required|email'">
            <span class="pv2 red" v-if="errors.has('email')">
              {{ errors.first('email') }}
            </span>
          </div>
        </div>
        <div class="fl w-100">
          <div class="fl w-50 pv3">
            <label class="f5 db pb2">Téléphone <span class="fw4">(optionel)</span></label>
            <input type="text" class="input-reset ba b--black-20 ph2 pv3 w-100 br2" name="phone" v-model="phone" v-validate="'required|numeric'">
            <span class="pv2 red" v-if="errors.has('phone')">
              {{ errors.first('phone') }}
            </span>
          </div>
        </div>
        <div class="fl w-100 pv4">
          <a class="ph4 pv3 f5 fw6 link pointer dim br2 pv2 white bg-green" @click="display">Envoyer</a>
        </div>
      </div>
    </section>
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
  },
  metaInfo: {
    title: 'Creation de Site Web',
    titleTemplate: null
  }
}
</script>