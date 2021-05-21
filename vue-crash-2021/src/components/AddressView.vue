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

<script>
export default {
  props: {
    title: String,
    data: {},
  },
};
</script>

<style></style>
