import consts from '../consts'

class UrlService{
    static login(){
        return consts.URL + "/api/auth/login"
    }
    static register(){
        return consts.URL + "/api/auth/register"
    }
    static get_user(){
        return consts.URL + "/api/user/get"
    }
    
    static manage_get_users(){
        return consts.URL + "/api/manage/getUsers"
    }

    static manage_update_user(id){
        return consts.URL + "/api/manage/update_user/" + id
    }
    
    static manage_destroy_user(id){
        return consts.URL + "/api/manage/destroy_user/" + id
    }
    
    static update_user(id){
        return consts.URL + "/api/user/update_user/" + id
    }

    static update_password(id){
        return consts.URL + "/api/user/update_password/" + id
    }

    static create_billingCycle(){
        return consts.URL + "/api/billingCycle/create"
    }

    static get_billingCycles(){
        return consts.URL + "/api/billingCycle/get"
    }

    static update_billingCycle(id){
        return consts.URL + "/api/billingCycle/update/" + id
    }
    static destroy_billingCycle(id){
        return consts.URL + "/api/billingCycle/destroy/" + id
    }
    static get_summary(){
        return consts.URL + "/api/home/summary"
    }
}

export default UrlService