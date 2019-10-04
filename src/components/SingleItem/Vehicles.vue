<template>
  <div>
    <p>Name: {{ data.name }}</p>
    <p>Model: {{ data.model }}</p>
    <p>Cargo capacity: {{ data.cargo_capacity }}</p>
    <p>Manufacturer: {{ data.manufacturer }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>