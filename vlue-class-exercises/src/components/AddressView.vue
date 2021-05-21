<template>
  <div>
    <h4>{{ title }}</h4>
    <p>Name: {{ data.shippingName }}</p>
    <p>Lastname: {{ data.shippingLastName }}</p>
    <p>Street: {{ data.shippingStreet }}</p>
    <p>House number: {{ data.houseNumber }}</p>
    <p>Zip code : {{ data.zipCode }}</p>
    <p>City: {{ data.city }}</p>
    <p>Country: {{ data.country }}</p>
    <p>Notes: {{ data.notes }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class AddressView extends Vue {
  @Prop({ type: String, required: true }) title!: string
  @Prop({ type: Object, required: true }) data!: any

  // props: {
  //   title: String,
  //   data: {},
  // },
}
</script>

<style></style>
