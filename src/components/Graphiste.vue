<template>
  <div class="flex justify-center">

    <div class="dt pa3 b--solid b--black-30 br0 bw0 w-50">
      <div class="dt-row">
        <div class="dtc tc">
          <h2>Graphiste</h2>
        </div>
      </div>

      <hr>

      <div class="flex justify-center">
        <div class="w-100">
          <div class="fl w-50 pa2">
            <dd class="ma2">
              <input name="type" value="GWD" type="radio" class="mr2" v-model="type"/>
              <label> Webdesign</label>
            </dd>
            <dd class="ma2">
              <input name="type" value="GIL" type="radio" class="mr2" v-model="type"/>
              <label> Illustrations</label>
            </dd>
            <dd class="ma2">
              <input name="type" value="GLO" type="radio" class="mr2" v-model="type"/>
              <label> Logo</label>
            </dd>
          </div>
          <div class="fl w-50 pa2">
            <dd class="ma2">
              <input name="type" value="GPR" type="radio" class="mr2" v-model="type"/>
              <label> Print (flyers, cartes, catalogues...)</label>
            </dd>
            <dd class="ma2">
              <input name="type" value="G3D" type="radio" class="mr2" v-model="type"/>
              <label> 3D</label>
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
              <input type="text" class="input-reset ba b--black-20 pa2 mb2 w-100 br2" placeholder="Saisir vote nom" name="name" v-model="name"  v-validate="'required|alpha'">
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
// *Graphiste*                             CODE
// - Webdesign                             GWD
// - Illustrations                         GIL
// - Logo                                  GLO
// - Print (flyers, cartes, catalogues...) GPR
// - 3D                                    G3D
import swal from 'sweetalert';

export default {
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      price: '0 000,00',
      flag: false,
      type: '',
      priceflag: false,
      typetxt: ''
    }
  },
  methods: {
    createquote () {
      this.$store.dispatch('createQuote',{
        type: 'GWD',
        price: '8 000,00'
      })
    },
    display () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          swal("Form Submitted!", "Votre cotation est prête", "success");
          var type = this.allQuotations.find(item => item.type == this.type)
          this.price = type.price
          this.typetxt = type.title
          this.$store.dispatch('pushUserData', {
            name: this.name,
            email: this.email,
            phone: this.phone,
            quote: this.type
          })
          this.priceflag = true
          this.flag = false
          return;
        }
        swal("Erreur", "Prière de saisir les informations manquantes", "error");
      });
    }
  },
  watch: {
    type: function (value) {

      switch (value) {
        case 'GWD':
          this.flag = true
          break;
        case 'GIL':
          this.flag = true
          break;
        case 'GLO':
          this.flag = true
          break;
        case 'GPR':
          this.flag = true
          break;
        case 'G3D':
          this.flag = true
          break;
        default:

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
