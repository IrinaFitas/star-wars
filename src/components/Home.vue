<template>
  <div class="home">
    <h1>Hello!</h1>
    <p>All the Star Wars data you've ever wanted:</p>
    <p>Planets, Spaceships, Vehicles, People, Films and Species</p>
    <ul class="categories-list">
      <li v-for="(item, index) in categories" :key="index" @click="$router.push(item)" class="categories-list__item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: ["films", "people", "planets", "species", "starships", "vehicles"]
    }
  }
}
</script>

<style scoped>
.categories-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  min-height: 400px;
  width: 80%;
  margin: 0 auto;
  list-style: none;
  padding: 0;
}

.categories-list__item {
  width: 45%;
  font-size: 24px;
  height: 100px;
  line-height: 100px;
  text-transform: capitalize;
  vertical-align: center;
  box-shadow: 0 0 3px #d1e0e0;
  cursor: pointer;
}
</style>