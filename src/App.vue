<template>
  <div id="app">
    <h1>Hello!</h1>
    <p>All the Star Wars data you've ever wanted:</p>
    <p>Planets, Spaceships, Vehicles, People, Films and Species</p>
    <input-field></input-field>
  </div>
</template>

<script>
import InputField from "./components/InputField.vue";

export default {
  name: 'app',
  components: {
    InputField
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Overpass+Mono&display=swap');

#app {
  font-family: "Overpass Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  font-size: 16px;
}
</style>
