import { withoutTokenInstance, authenticateTokenInstance } from './axiosInstances'

export const login = (data) => {
    return withoutTokenInstance({
        method: 'POST',
        url: '/rest-auth/login/',
        data: data
    })
}

export const logout = () => {
    return authenticateTokenInstance({
        method: 'POST',
        url: '/rest-auth/logout/',
    })
}

export const register = (config) => {
    return withoutTokenInstance({
        method: 'POST',
        url: '/register/',
        data: config
    })
}