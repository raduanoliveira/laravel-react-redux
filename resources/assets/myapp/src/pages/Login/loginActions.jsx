import axios from 'axios'
import {loginSuccess, doLogout} from '../../services/authService'
import {get} from '../../services/HttpService'
import UrlService from '../../services/UrlService'


export const sendLogin = (values, remember) => {

    return (dispatch) => {
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
        let credentials = {
            username: values.email,
            password: values.password
        }
        
        return axios.post(UrlService.login(), credentials, headers)
            .then(resp => {
                let login = loginSuccess(resp.data, remember)
                if(login){
                    dispatch({
                        type: 'IS_LOGIN',
                        payload: resp.data,
                        token: resp.data.access_token,
                        user: resp.data.user,
                    })
                }
                
            }).catch((error) => {
                return error.response
            })
    }
}

export const getUser = async () =>{
    return async (dispatch) => {
        try{
            const response = await get(UrlService.get_user())
            dispatch({
                type: 'SET_USER',
                payload: response.data
            })
        }catch(error){
            
        }
        
    }
}

export const logout = () =>{
    return (dispatch) => {
        doLogout()
        dispatch({
            type: 'IS_LOGOUT',
            payload: null
        })

    }
}

export const changeChecked = checked =>{

    let changeCheck = !checked
    return (dispatch) =>{
        dispatch({
            type: 'CHECKED',
            payload: changeCheck
        })
    }
}