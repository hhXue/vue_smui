import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import showTitle from '../directives/showTitle'
import Login from '@/views/money/Login'
import Recharge from '@/views/money/Recharge'
import Outcash from '@/views/money/Outcash'
import Aboutus from '@/views/explain/Aboutus'
import Privacy from '@/views/explain/Privacy'
import Live from '@/views/share/Live'
import Playback from '@/views/share/Playback'

Vue.use(Router)

// Resource
Vue.use(VueResource)

// Vue.http.options.root = process.env.NODE_ENV === 'development' ? 'src/assets/data' : '/h5_1.3/static/data'

// Directive
Vue.directive('title', showTitle)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        console.log('小弟B：哎呀妈呀！大兄弟，这是要去哪呀？', to)
        console.log('小弟A：大兄弟，哪儿旮沓的呀！', from)
        next() // 大哥：过去吧！
      },
      afterEnter: (to, from, next) => {
        console.log('小弟B：哎呀妈呀！大兄弟，这是要去哪呀？', to)
        console.log('小弟A：大兄弟，哪儿旮沓的呀！', from)
        next({}) // 大哥：过去吧！
      }
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge
    },
    {
      path: '/outcash',
      name: 'Outcash',
      component: Outcash
    },
    {
      path: '/outcash',
      name: 'Outcash',
      component: Outcash
    },
    {
      path: '/about_us',
      name: 'Aboutus',
      component: Aboutus
    },
    {
      path: '/live',
      name: 'Live',
      component: Live
    },
    {
      path: '/playback',
      name: 'Playback',
      component: Playback
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    }
  ]
})
