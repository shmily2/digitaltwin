import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import NotFound from '@/views/Error/404'
import Home from '@/views/Home'
import Intro from '@/views/Intro/Intro'
// import api from '@/http/api'
// import store from '@/store'
// import { getIFramePath, getIFrameUrl } from '@/utils/iframe'

Vue.use(Router)
const router = new Router({
    routes: [{
            path: '/',
            name: '登录',
            component: Login
        },
        {
            path: '/home',
            name: '首页',
            component: Home,
            children: [{
                path: '',
                name: '系统介绍',
                component: Intro,
                meta: {
                    icon: 'fa fa-home fa-lg',
                    index: 0
                }
            }]
        },

        {
            path: '/404',
            name: 'notFound',
            component: NotFound
        }
    ]
})
export default router