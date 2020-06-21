import CookieService from '../../../services/cookieService'

class Auth{
    constructor(){
        const token = CookieService.get('access_token')
        token ? (this.authenticated = true) : (this.authenticated= false)
    }

    isAuthenticated(){
        return this.authenticated
    }

    getAccessToken(){
        return CookieService.get("access_token");
    }

}

export default new Auth()