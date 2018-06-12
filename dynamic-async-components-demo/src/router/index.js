import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PlaygroundSync from '@/components/Playground-sync'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/playground-async',
      name: 'Playground-Async',
      component: () => import('@/components/Playground-async')
    },
    {
      path: '/playground-sync',
      name: 'Playground-Sync',
      component: PlaygroundSync
    }
  ]
})
