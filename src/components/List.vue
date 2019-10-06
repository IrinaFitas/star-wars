<template>
  <div class="list-container">
    <a class="go-back" href="#" @click.prevent="$router.go(-1)">← Go back</a>
    <h6 v-if="loading">Loading...</h6>
    <template v-else>
      <input-field></input-field>
      <ul class="list">
        <li v-for="(item, index) in list" :key="index" @click="goTo(item)" class="list__item">
          {{$route.params.category === 'films' ? item.title : item.name}}
        </li>
      </ul>
    </template>

    <div class="pagination">
      <button
        class="pagination__btn"
        type="button"
        :disabled="!prevPage"
        @click="getCategoryDataByPage('prev')">
        ←
      </button>
      <button
        v-for="page in pages"
        :key="page"
        class="pagination__btn"
        type="button"
        @click="getCategoryDataByPage(page)">
        {{ page }}
      </button>
      <button
        class="pagination__btn"
        type="button"
        :disabled="!nextPage"
        @click="getCategoryDataByPage('next')">
        →
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import InputField from "./shared/InputField.vue";

export default {
  components: {
    InputField
  },
  data() {
    return {
      list: [],
      total: 0,
      nextPage: null,
      prevPage: null,
      loading: true
    };
  },
  computed: {
    pages() {
      const perPage = 10;

      return Math.ceil(this.total / perPage);
    }
  },
  beforeMount () {
    this.getCategoryData(this.$route.query.search);
  },
  beforeRouteUpdate(to, from, next) {
    if (to.query.search) {
      this.getCategoryData(to.query.search);
    } else {
      this.getCategoryData();
    }

    next();
  },
  methods: {
    getCategoryData(searchQuery) {
      this.loading = true;

      let url = null;

      if (searchQuery) {
        url = `/${this.$route.params.category}/?search=${searchQuery}`;
      } else {
        url = this.$route.params.category;
      }

      axios.get(url)
        .then(res => {
          this.handleData(res.data);
        })
        .catch(error => console.log(error));
    },
    getCategoryDataByPage(page) {
      this.loading = true;

      if (page === "prev" || page === "next") {

        if (page === "prev") {
          page = new URLSearchParams(this.prevPage.split("?")[1]).get("page");
        }
        if (page === "next") {
          page = new URLSearchParams(this.nextPage.split("?")[1]).get("page");
        }
      }

      this.$router.push({
        query: { page }
      });

      axios.get(`${this.$route.params.category}/?page=${page}`)
        .then(res => {
          this.handleData(res.data);
        })
        .catch(error => console.log(error));
    },
    handleData(data) {
      const { count, next, previous, results } = data;
      this.list = results;
      this.total = count;
      this.prevPage = previous;
      this.nextPage = next;
      this.loading = false;
    },
    goTo(item) {
      const id = item.url.split('/').splice(-2, 1)[0];

      this.$router.push(`${this.$route.params.category}/${id}`);
    }
  }
}
</script>

<style scoped>
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
.pagination {
  margin-top: 30px;
}
.pagination__btn {
  padding: 5px 10px;
  margin: 0 3px;
  margin-bottom: 5px;
  border: 0;
  box-shadow: 0 0 3px #d1e0e0;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.25s;
}
.pagination__btn:not([disabled]):hover {
  color: #fff;
  background-color: #d1e0e0;
}
.pagination__btn:disabled {
  opacity: 0.75;
  cursor: not-allowed;
}
</style>