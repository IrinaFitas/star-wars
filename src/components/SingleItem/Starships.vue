<template>
  <div>
    <a class="go-back" href="#" @click.prevent="$router.go(-1)">← Go back</a>
    <h6 v-if="!loading">Loading...</h6>
    <div v-else class="single-item-container">
      <p class="single-item-container__title">Name: <span>{{ data.name }}</span></p>
      <p class="single-item-container__title">Model: <span>{{ data.model }}</span></p>
      <p class="single-item-container__title">Class: <span>{{ data.starship_class }}</span></p>
      <p class="single-item-container__title">Cargo capacity: <span>{{ data.cargo_capacity }}</span></p>
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