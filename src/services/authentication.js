import { withoutTokenInstance, authenticateTokenInstance } from './axiosInstances'

export const login = (config) => {

    let data = JSON.stringify({config})
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
    let data = JSON.stringify(config)
    return withoutTokenInstance({
        method: 'POST',
        url: '/register/',
        data: data
    })
}