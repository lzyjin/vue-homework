import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/multiplicationTable/',
    name: 'multiplication_table',
    component: () => import('@/views/multiplicationTable/index.vue'),
  },
  {
    path: '/findWord/',
    name: 'find_word',
    component: () => import('@/views/findWord/index.vue'),
  },
  {
    path: '/trafficLight/',
    name: 'traffic_light',
    component: () => import('@/views/trafficLight/index.vue'),
  },
  {
    path: '/endTalk/',
    name: 'end_talk',
    component: () => import('@/views/endTalk/index.vue'),
  },
  {
    path: '/numberBaseball/',
    name: 'number_baseball',
    component: () => import('@/views/numberBaseball/index.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
