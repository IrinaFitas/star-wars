<template>
  <div>
    <a class="go-back" href="#" @click.prevent="$router.go(-1)">← Go back</a>
    <h6 v-if="!loading">Loading...</h6>
    <div v-else class="single-item-container">
      <p class="single-item-container__title">Name: <span>{{ data.name }}</span></p>
      <p class="single-item-container__title">Gender: <span>{{ data.gender }}</span></p>
      <p class="single-item-container__title">Eye color: <span>{{ data.eye_color }}</span></p>
      <p class="single-item-container__title">Height: <span>{{ data.height }}</span></p>
      <p class="single-item-container__title">Mass: <span>{{ data.skin_color }}</span></p>
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