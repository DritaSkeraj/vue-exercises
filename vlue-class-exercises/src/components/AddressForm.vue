<template>
  <div>
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

@Component
export default class AddressForm extends Vue {
  @Prop({ type: Object, required: true }) value!: any

  @Emit('input')
  updateValue(key: string, value: any) {
    return { ...this.value, [key]: value }
  }
}
</script>

<style></style>
