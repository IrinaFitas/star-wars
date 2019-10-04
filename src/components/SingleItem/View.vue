<template>
  <div class="single-item">
    {{ currentView }}
    <component :is="currentView" :data="info"></component>
  </div>
</template>

<script>
import axios from 'axios';
import People from "./People.vue";
import Films from "./Films.vue";
import Planets from "./Planets.vue";
import Species from "./Species.vue";
import Starships from "./Starships.vue";
import Vehicles from "./Vehicles.vue";

export default {
  data() {
    return {
      info: {}
    };
  },
  components: {
    People,
    Films,
    Planets,
    Species,
    Starships,
    Vehicles
  },
  computed: {
    currentView() {
      return this.$route.params.category;
    }
  },
  mounted() {
    axios.get(`${this.$route.params.category}/${this.$route.params.id}`)
      .then(res => {
        console.log(res);
        this.info = res.data;
      })
      .catch(error => console.log(error));
  }
}
</script>