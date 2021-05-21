<template>
  <div class="app-container">
    <div class="col1">
      <h1>Execise1:</h1>
      <p>there we goo🚀🚀🚀</p>
      <AddressView title="Shipping data" :data="shipping" />
      <AddressView title="Billing" :data="parsedBilling" />
      <AddressView title="Billing 2" :data="getParsedBilling()" />
      <div>
        <input type="checkbox" v-model="isChecked" name="checkbox" />
        <label for="checkbox"> Are the billing and shipping addresses same?</label>
      </div>
    </div>
    <div class="col2" v-if="!isChecked">
      <AddressForm :value="billing" @input="val => (billing = val)" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import data from './@data'
import AddressView from './components/AddressView.vue'
import AddressForm from './components/AddressForm.vue'
import { Component, Prop, Emit, Watch } from 'vue-property-decorator'

@Component({
  components: {
    AddressForm,
    AddressView
  }
})
export default class App extends Vue {
  @Prop({ type: String }) name!: string

  @Watch('isChecked') chackedChange() {
    console.log('adassadsd')
  }
  shipping = {
    shippingName: data.shipping.name,
    shippingLastName: data.shipping.lastName,
    shippingStreet: data.shipping.street,
    houseNumber: data.shipping.houseNumber,
    zipCode: data.shipping.zipCode,
    city: data.shipping.city,
    country: data.shipping.country,
    notes: data.shipping.notes
  }

  billing = {
    shippingName: data.billing.name,
    shippingLastName: data.billing.lastName,
    shippingStreet: data.billing.street,
    houseNumber: data.billing.houseNumber,
    zipCode: data.billing.zipCode,
    city: data.billing.city,
    country: data.billing.country,
    notes: data.billing.notes
  }
  isChecked = true
  getParsedBilling() {
    console.log('method getParsedBilling')
    return !this.isChecked ? this.billing : this.shipping
  }
  get parsedBilling() {
    console.log('computed parsedBilling')
    return this.getParsedBilling()
  }
}
</script>
<style scoped>
* {
  color: #300d4f;
  font-weight: 500;
}
.app-container {
  display: flex;
  flex-direction: row;
  flex-basis: 1;
}
.title {
  margin: 0 auto;
}
.col1 {
  width: 45vw;
}
.col1 > div {
  border: 2px solid rgb(207, 207, 207);
  border-radius: 4px;
  margin: 1em;
  padding: 1em;
  background-color: #eee;
}
.col1 > h1,
.col1 > p {
  margin-left: 50px;
}
h4 {
  text-decoration: underline;
  color: #8731d2;
}
.col2 {
  width: 45vw;
  height: 88vh;
  position: fixed;
  left: 45vw;
  display: flex;
  flex-direction: column;
  background-color: #d2d9e7;
  border-radius: 4px;
  color: #0d2554;
  border-radius: 4px;
  margin: 1em;
  padding: 1em;
}
.col2 > input {
  margin: 0.5em;
  padding: 0.5em;
  border: 1px solid gray;
  border-radius: 4px;
}
</style>
