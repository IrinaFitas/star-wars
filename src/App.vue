<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'app'
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

.router-link-active {
  font-size: 25px;
  text-decoration: none;
  color: black;
  display: block;
  margin-bottom: 25px;
}
</style>
