<template>
  <div>
    <a class="go-back" href="#" @click.prevent="$router.go(-1)">← Go back</a>
    <h6 v-if="!loading">Loading...</h6>
    <div v-else class="single-item-container">
      <p class="single-item-container__title">Title: <span>{{ data.title }}</span></p>
      <p class="single-item-container__title">Episode: <span>{{ data.episode_id }}</span></p>
      <p class="single-item-container__title">Director: <span>{{ data.director }}</span></p>
      <p class="single-item-container__title">Release date: <span>{{ data.release_date }}</span></p>
      <p class="single-item-container__title">Opening: <span>{{ data.opening_crawl }}</span></p>
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