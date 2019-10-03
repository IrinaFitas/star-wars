<template>
  <ul class="result">
    <li v-for="(item, index) in array" :key="index">{{item}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      array: ["Some result 1", "Some result 2", "Some result 3"]
    };
  }
}
</script>