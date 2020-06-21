import {post} from '../../services/HttpService'
import {sendLogin} from '../Login/loginActions'
import UrlService from '../../services/UrlService'

export const registerUser = (values) => {
    return async (dispatch) => {
        try{
            const response = await post(UrlService.register(), values)
            dispatch(sendLogin(values,false))
        }catch(error){
            return error.response
        }
    }
}