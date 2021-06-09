import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import UserInfo from '@/views/User'

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes : [
        {
            path: '/',
            meta: {auth: true},
            component: Home
        },
        {
            path: '/markup',
            meta: {auth: true},
            component:  () => import('./views/Markup.vue')
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/user',
            component: UserInfo
        }
    ]
})

export default router