import axios from 'axios'
import router from '@/router/index.js'
import { Toast } from 'vant'
import { ApiToken } from './ApiToken.js'


const service = axios.create({
    baseURL: '',
    timeout: 5000
})

service.interceptors.request.use(
    config => {
      config
        // if(token) {
        //   config.headers.common.Authorization = 'Bearer' + token
        // }
        // return config
    },
    error => {
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        switch (error.response.status) {
            case 400:
              Toast('请求数据格式不正确！')
              break
            case 401:
              Toast('当前处于未登录状态，请先登录重试！')
              localStorage.removeItem(ApiToken.token)
              localStorage.removeItem(ApiToken.roleType)
              router.push('/Login')
              break
            case 402:
              break
            case 403:
              Toast('页面访问权限不足！已返回首页')
              localStorage.removeItem(ApiToken.token)
              localStorage.removeItem(ApiToken.roleType)
              router.push('/Login')
              break
            case 404:
              break
            case 415:
              Toast('请求数据格式不正确！')
              break
            case 500:
              localStorage.removeItem(ApiToken.token)
              localStorage.removeItem(ApiToken.roleType)
              break
        }
        return Promise.reject(error.response.status)
    }
)


export default service