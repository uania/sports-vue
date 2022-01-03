import Vue from "vue";
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

Vue.use(VueRouter)


const Home = () => import('@/views/Home/index.vue')
const Index = () => import('@/views/Index/index.vue')
const Introduce = () => import('@/views/Introduce/index.vue')
const Login = () => import('@/views/Login/index.vue')
const Personal = () => import('@/views/Personal/index.vue')

const originalPush = VueRouter.prototype.push
// 重写了原型上的push方法，统一的处理了错误信息
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const routes = [
    {
        path: '/',
        redirect: '/Home/Index'
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页',
            activePath: '/Home'
        },
        children: [
            {
                path: '/Home/Index',
                name: 'Index',
                component: Index,
                meta: {
                    title: '首页',
                    activePath: '/Home/Index'
                },
            },
            {
                path: '/Home/Introduce',
                name: 'Introduce',
                component: Introduce,
                meta: {
                    title: '介绍页',
                    activePath: '/Home/Introduce'
                },
            },
            {
                path: '/Home/Personal',
                name: 'Personal',
                component: Personal,
                meta: {
                    title: '介绍页',
                    activePath: '/Home/Personal'
                },
            }
        ]
    }, {
        path: '/Login',
        name: 'Login',
        component: Login,
        meta: {
            title: '登录页',
            activePath: '/Login'
        }
    }
]

const router = new VueRouter({
    routes
})
/*
// 路由守卫 登录前使用
router.beforeEach((to, from, next) => {
    console.log(from)
    // 路由发生变化修改页面title
    if (to.path === '/login') {
        next();
    }
    //获取token  没有token则跳转到登录页面
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) {
        next('/login')
    }
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    // if (to.name != 'register') {
    //     getUserInfo().then((res) => {
    //         if (res.Code == 201) {
    //             Toast("您的信息尚未补全，请补全信息后登录")
    //             if (to.name == 'register') {
    //                 next()
    //             } else {
    //                 next({
    //                     path: '/register',
    //                     query: from.query
    //                 })
    //             }
    //         } else {
    //             next()
    //         }
    //     });
    // }
    NProgress.start()
    next()
})
*/
/*
router.beforeEach((to, from, next) => {
    let flag = sessionStorage.getItem('token')       //获取点击登录按钮时所设置的 sessionStorage
    if (to.path === '/home') {        //如果想要跳转home必须判断有没有sessionStorage
        if (flag) {              //如果有sessionStorage
            next();				//跳转
        } else {
            alert('您还没有登录，请先登录账户');   //没有就先登录
            next('/login')							//还在登录页
        }
    }
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    NProgress.done()
})
*/

export default router