import {post} from '../../services/HttpService'
import UrlService from '../../services/UrlService'
import {getUser} from '../Login/loginActions'
import {toastr} from 'react-redux-toastr'

export const updateUser = (values) => {
    return async (dispatch) => {
        try{
            let file = values.photo

            if(values.file){
                file = values.file
            }
            let options = {
                'content-type': 'multipart/form-data'
            }

            let data = new FormData()
            data.append('id', values.id)
            data.append('name', values.name)
            data.append('email', values.email)
            data.append('photo', file)
            
            const response = await post(UrlService.update_user(values.id), data, options)
            if(response.status == 200){
                toastr.success("Success","User updated successfully")
                dispatch(getUser())
            }else{
                return response.data
            }
            
        }catch(error){
            return error.response
        }
    }
}

export const updatePassword = async (values) => {
    return  await post(UrlService.update_password(values.id), values)   
}