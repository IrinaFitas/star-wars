<template>
  <div>
    <p>Name: {{ data.name }}</p>
    <p>Terrain: {{ data.terrain }}</p>
    <p>Diameter: {{ data.diameter }}</p>
    <p>Gravity: {{ data.gravity }}</p>
    <p>Climate: {{ data.climate }}</p>
    <p>Rotation period: {{ data.rotation_period }}</p>
    <p>Population: {{ data.population }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>