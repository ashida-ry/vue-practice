import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ChatView from '@/views/ChatView.vue'
import TopView from '@/views/TopView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/top',
      name: 'top',
      component: TopView,
    },
    {
      path: '/chats/:id',
      name: 'chat',
      component: ChatView,
    },
  ],
})

export default router
