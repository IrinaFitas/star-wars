<template>
  <div>
    <p>Name: {{ data.name }}</p>
    <p>Gender: {{ data.gender }}</p>
    <p>Eye color: {{ data.eye_color }}</p>
    <p>Height: {{ data.height }}</p>
    <p>Mass: {{ data.skin_color }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>