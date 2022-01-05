import request from '@/utils/request'

export function signin (data) {
    return request({
        url: '/api/Account/SignIn',
        method: 'post',
        data
    })
}