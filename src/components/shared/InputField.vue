<template>
  <div class="input-container">
    <input v-model="query" class="input-container__input" type="text" placeholder="What to search?" />
    <button type="button" @click="search" class="input-container__button">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    }
  },
  methods: {
    search () {
      this.$router.push({
        query: {
          search: this.query
        }
      });
    }
  }
}
</script>

<style>
.input-container {
  margin: 0 auto 30px;
  display: flex;
  width: 70%;
  border: 2px solid #d1e0e0;
  border-radius: 7px;
  padding: 15px;
}

.input-container__input {
  width: 80%;
  font-family: "Overpass Mono", monospace;
  padding: 10px 15px;
  border: 2px solid #f0f5f5;
  border-radius: 5px 0 0 5px;
  outline: none;
}

.input-container__button {
  background-color: transparent;
  border: 2px solid black;
  border-radius: 0 5px 5px 0;
  padding: 10px 15px;
  cursor: pointer;
  font-family: "Overpass Mono", monospace;
  font-size: 16px;
  margin-left: -2px;
}
</style>