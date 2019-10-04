<template>
  <div>
    <p>Name: {{ data.name }}</p>
    <p>Model: {{ data.model }}</p>
    <p>Class: {{ data.starship_class }}</p>
    <p>Cargo capacity: {{ data.cargo_capacity }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>