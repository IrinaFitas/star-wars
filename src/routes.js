import Home from "./components/Home.vue";
import List from "./components/List.vue";
import SingleItem from "./components/SingleItem/View.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/:category", component: { render (h) {
    return h("router-view")
  }}, children: [
    { path: "/", component: List },
    { path: ":id", component: SingleItem }
  ]}
];