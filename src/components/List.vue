<template>
  <div class="list-container">
    <router-link :to="'/'">← Go back</router-link>
    <h6 v-if="loading">Loading...</h6>
    <ul v-else class="list">
      <li v-for="(item, index) in list" :key="index" @click="goTo(item)" class="list__item">
        {{$route.params.category === 'films' ? item.title : item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      list: [],
      loading: true
    };
  },
  beforeMount () {
    this.getCategoryData();
  },
  methods: {
    getCategoryData() {
      this.loading = true;

      axios.get(this.$route.params.category)
        .then(res => {
          this.list = res.data.results;
          this.loading = false;
        })
        .catch(error => console.log(error));
    },
    goTo(item) {
      console.log(item);
      const id = item.url.split('/').splice(-2, 1)[0];

      this.$router.push(`${this.$route.params.category}/${id}`);

    }
  }
}
</script>

<style scoped>
.router-link-active {
  font-size: 25px;
  text-decoration: none;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  list-style: none;
  padding: 0;
}
.list__item {
  width: 45%;
  padding: 10px 15px;
  margin-bottom: 5px;
  box-shadow: 0 0 3px #d1e0e0;
  cursor: pointer; 
}
</style>