import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import NotFound from '@/views/Error/404'
import Home from '@/views/Home'
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
            path: '/register',
            name: '注册',
            component: Register
        },
        {
            path: '/home',
            redirect: "/home/ComprehensiveSituation",
            name: '首页',
            component: Home,
            children: [{
                    path: '/home/ComprehensiveSituation',
                    name: 'ComprehensiveSituation',
                    component: () =>
                        import ("@/views/item/ComprehensiveSituation"),
                    meta: {
                        icon: 'fa fa-home fa-lg',
                        index: 0
                    }
                }, {
                    path: '/home/SmartEconomy',
                    name: 'SmartEconomy',
                    component: () =>
                        import ("@/views/item/SmartEconomy"),
                    meta: {
                        icon: 'fa fa-home fa-lg',
                        index: 1
                    }
                }, {
                    path: '/home/IntellectualClosure',
                    name: 'IntellectualClosure',
                    component: () =>
                        import ("@/views/item/IntellectualClosure"),
                    meta: {
                        icon: 'fa fa-home fa-lg',
                        index: 2
                    }
                },
                {
                    path: '/home/IntelligentSafetySupervision',
                    name: 'IntelligentSafetySupervision',
                    component: () =>
                        import ("@/views/item/IntelligentSafetySupervision"),
                    meta: {
                        icon: 'fa fa-home fa-lg',
                        index: 3
                    }
                },
                {
                    path: '/home/SmartEnvironmentalProtection',
                    name: 'SmartEnvironmentalProtection',
                    component: () =>
                        import ("@/views/item/SmartEnvironmentalProtection"),
                    meta: {
                        icon: 'fa fa-home fa-lg',
                        index: 4
                    }
                },
                {
                    path: '/home/IntelligentEmergency',
                    name: 'IntelligentEmergency',
                    component: () =>
                        import ("@/views/item/IntelligentEmergency"),
                    meta: {
                        icon: 'fa fa-home fa-lg',
                        index: 5
                    }
                },

                {
                    path: '/home/AuxiliaryDecision',
                    name: 'AuxiliaryDecision',
                    component: () =>
                        import ("@/views/item/AuxiliaryDecision"),
                    meta: {
                        icon: 'fa fa-home fa-lg',
                        index: 6
                    }
                },
            ]
        },

        {
            path: '/404',
            name: 'notFound',
            component: NotFound
        }
    ]
})
router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(from)
    next()

})

export default router