import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import QuestionOne from '../components/Question/QuestionOne.vue';
import QuestionTwo from '../components/Question/QuestionTwo.vue';
import QuestionThree from '../components/Question/QuestionThree.vue';
import TestView from '../views/TestView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }, {
      path: '/test',
      name: 'test',
      component: TestView,
    },
     { path: "/test/", redirect: "/test/1" },
     { path: "/test/1", component: QuestionOne },
     { path: "/test/2", component: QuestionTwo },
     { path: "/test/3", component: QuestionThree },
  ]
})

export default router
