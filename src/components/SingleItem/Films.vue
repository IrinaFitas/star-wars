<template>
  <div>
    <p>Title: {{ data.title }}</p>
    <p>Episode: {{ data.episode_id }}</p>
    <p>Director: {{ data.director }}</p>
    <p>Release date: {{ data.release_date }}</p>
    <p>Opening: {{ data.opening_crawl }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>