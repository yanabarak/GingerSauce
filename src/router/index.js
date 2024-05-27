import Vue from 'vue';
import VueRouter from 'vue-router';
import BookView from '../views/BookView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'book',
      component: BookView,
    },
  ],
});

export default router;
