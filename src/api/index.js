import request from '@/utils/request'

export function signin (data) {
    return request({
        url: '/Account/SignIn',
        method: 'post',
        data
    })
}