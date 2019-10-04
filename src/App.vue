<template>
  <div id="app">
    <h1>Hello!</h1>
    <p>All the Star Wars data you've ever wanted:</p>
    <p>Planets, Spaceships, Vehicles, People, Films and Species</p>
    <!-- <input-field></input-field>
    <result></result> -->
    <ul class="categories-list">
      <li v-for="(item, index) in categories" :key="index" @click="showTheCategory(item)" class="categories-list__item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
// import InputField from "./components/InputField.vue";
// import Result from "./components/Result.vue";
import axios from "axios";

export default {
  name: 'app',
  // components: {
  //   InputField,
  //   Result
  // },
  data() {
    return {
      categories: ["Films", "People", "Planets", "Species", "Starships", "Vehicles"]
    };
  },
  created() {
    // fetch("https://swapi.co/api/starships/9/")
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error));
    axios.get("films/")
      .then(res => console.log(res))
      .catch(error => console.log(error));
  },
  methods: {
    showTheCategory(item) {
      axios.get(`${item.toLowerCase()}/`)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Overpass+Mono&display=swap');

body {
  background-color: rgba(240, 245, 245, 0.2);
}

#app {
  font-family: "Overpass Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  font-size: 16px;
  color: #141f1f;
}

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
  vertical-align: center;
  box-shadow: 0 0 3px #d1e0e0;
  cursor: pointer;
}
</style>
