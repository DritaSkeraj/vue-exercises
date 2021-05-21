<template>
  <div class="col2">
    <input type="text" :value="value.shippingName" @input="updateValue('shippingName', $event.target.value)" />
    <input type="text" :value="value.shippingLastName" @input="updateValue('shippingLastName', $event.target.value)" />
    <input type="text" :value="value.shippingStreet" @input="updateValue('shippingStreet', $event.target.value)" />
    <input type="text" :value="value.houseNumber" @input="updateValue('houseNumber', $event.target.value)" />
    <input type="text" :value="value.zipCode" @input="updateValue('zipCode', $event.target.value)" />
    <input type="text" :value="value.city" @input="updateValue('city', $event.target.value)" />
    <input type="text" :value="value.country" @input="updateValue('country', $event.target.value)" />
    <input type="text" :value="value.notes" @input="updateValue('notes', $event.target.value)" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Emit } from 'vue-property-decorator'

interface ValueInterface {
  shippingName: string
  shippingLastName: string
  shippingStreet: string
  houseNumber: string
  zipCode: string
  city: string
  country: string
  notes: string
}

@Component
export default class AddressForm extends Vue {
  @Prop({ type: Object, required: true }) value!: ValueInterface

  @Emit('input')
  updateValue(key: string, value: any) {
    return { ...this.value, [key]: value }
  }
}
</script>

<style>
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
