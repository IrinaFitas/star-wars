<template>
  <div>
    <a class="go-back" href="#" @click.prevent="$router.go(-1)">← Go back</a>
    <h6 v-if="!loading">Loading...</h6>
    <div v-else class="single-item-container">
      <p class="single-item-container__title">Name: <span>{{ data.name }}</span></p>
      <p class="single-item-container__title">Average height: <span>{{ data.average_height }}</span></p>
      <p class="single-item-container__title">Classification: <span>{{ data.classification }}</span></p>
      <p class="single-item-container__title">Eye-colors: <span>{{ data.eye_colors }}</span></p>
      <p class="single-item-container__title">Language: <span>{{ data.language }}</span></p> 
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    loading() {
      return !!this.data;
    }
  }
}
</script>