<template>
  <div>
    <a class="go-back" href="#" @click.prevent="$router.go(-1)">← Go back</a>
    <h6 v-if="!loading">Loading...</h6>
    <div v-else class="single-item-container">
      <p class="single-item-container__title">Name: <span>{{ data.name }}</span></p>
      <p class="single-item-container__title">Terrain: <span>{{ data.terrain }}</span></p>
      <p class="single-item-container__title">Diameter: <span>{{ data.diameter }}</span></p>
      <p class="single-item-container__title">Gravity: <span>{{ data.gravity }}</span></p>
      <p class="single-item-container__title">Climate: <span>{{ data.climate }}</span></p>
      <p class="single-item-container__title">Rotation period: <span>{{ data.rotation_period }}</span></p>
      <p class="single-item-container__title">Population: <span>{{ data.population }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    loading() {
      return !!this.data
      ;
    }
  }
}
</script>