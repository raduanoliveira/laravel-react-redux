import axios from 'axios'
import CookieService from './cookieService'


export const get = async (url) => {
    const access_token = CookieService.get('access_token')
    const options = {
        headers: {
            Authorization: "Bearer " + access_token
        }
    }
    try {
        return await axios.get(url, options);
    } catch (error) {
        console.error("Not able to fetch data", error)
    }
}

export const post = async (url, data, options = null) => {
    
    const access_token = CookieService.get('access_token')

    let headersToken = {}
    let headersDefault = {}

    if (access_token) {
        headersToken = {
                Authorization: "Bearer " + access_token
        }
    }
    let concatHeaders = Object.assign(headersDefault, headersToken)
    let finalOptions = Object.assign(concatHeaders, options)
    const headers = {headers: finalOptions}

    try {
        return await axios.post(url, data, headers)
    } catch (error) {
        console.error("Not able to fetch data", error)
        return error.response !== undefined ? error.response : error
    }
}

export const put = async (url, data) => {
    
    const access_token = CookieService.get('access_token')
    const options = {
        headers: {
            Authorization: "Bearer " + access_token
        }
    }
    
    try {
        return await axios.put(url, data, options)
    } catch (error) {
        console.error("Not able to fetch data", error)
        return error.response !== undefined ? error.response : error
    }
}

export const destroy = async (url) => {
    
    const access_token = CookieService.get('access_token')
    const options = {
        headers: {
            Authorization: "Bearer " + access_token
        }
    }
    
    try {
        return await axios.delete(url, options)
    } catch (error) {
        console.error("Not able to fetch data", error)
        return error.response !== undefined ? error.response : error
    }
}