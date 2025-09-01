import { createRouter, createWebHistory } from 'vue-router';

import Search from '../components/Search.vue'; 
import MeditationDetail from '../components/MeditationDetail.vue';

const routes = [
  
  //冥想空间页
  {
    path: '/meditation-space',
    
    component:() => import('../components/MeditationSpace.vue')
  },
  //搜索页
  {
    path: '/search',
    component: Search // 绑定搜索页组件
  },
  //冥想详情页
  {
    path: '/meditation-detail/:id',
    component: MeditationDetail 
  },
  //重定向到冥想空间页
  {
    path: '/:pathMatch(.*)*',
    redirect: '/meditation-space'
  }

  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;