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
}
</script>

<style>
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
</style>
