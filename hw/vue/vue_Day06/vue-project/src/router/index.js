import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import UserView from '@/views/UserView.vue'
import LoginView from '@/views/LoginView.vue'
import BoardView from '@/views/BoardView.vue'
import BoardList from '@/components/board/BoardList.vue'
import BoardCreate from '@/components/board/BoardCreate.vue'

const isAuth = true // false : 로그인이 안되었음

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/user/:id',  // 동적 라우팅
      name: 'user',
      component: UserView,
    },
    {
      path: '/login',  // 동적 라우팅
      name: 'login',
      component: LoginView,
      beforeEnter: (to, from) => {
        //로그인 됐다
        if (isAuth) {
          console.log('로그인 된 상태')
          return {name:'home'}
        }
      }
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView,
      children: [
        {
          path: '',
          name: 'boardList',
          component: BoardList,
        },
        {
          path: 'create', // 슬래시 넣지 마라
          name : 'boardCreate',
          component: BoardCreate
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  // console.log(to)
  // console.log(from)
  if (!isAuth && to.name !== 'login') {
    console.log('로그인 필요')
    return { name: 'login' }
  }
})

export default router
