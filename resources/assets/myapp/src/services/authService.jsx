import CookieService from './cookieService'

export const loginSuccess = (response,remember) => {

    const expireAt = 60 * 24;

    if(!remember){
        const options = {path: "/"}
        CookieService.set("access_token", response.access_token, options)
        return true
    }

    let date = new Date()
    date.setTime(date.getTime() + expireAt * 60 * 1000)
    const options = {path: "/", expires: date}
    CookieService.set("access_token", response.access_token, options)
    
    return true
}

export const doLogout = () =>{
    CookieService.remove('access_token')
}