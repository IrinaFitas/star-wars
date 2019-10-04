<template>
  <div class="specy-container">
    <p>Name: {{ data.name }}</p>
    <p>Average height: {{ data.average_height }}</p>
    <p>Classification: {{ data.classification }}</p>
    <p>Eye-colors: {{ data.eye_colors }}</p>
    <p>Language: {{ data.language }}</p> 
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>