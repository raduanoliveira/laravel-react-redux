import {get, post, put, destroy} from '../../../services/HttpService'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from '../../../components/common/tab/tabActions'
import UrlService from '../../../services/UrlService'

export function getList(){
    return async (dispatch) => {
        const request = await get(UrlService.manage_get_users())
        dispatch({
            type: 'GET_USERS_FETCHED',
            payload: request.data.users,
            roles: request.data.roles
        })

    }
}

export function update(values){

    return async (dispatch) => {
        try{
            const response = await put(UrlService.manage_update_user(values.id), values)
            if(response.status == 200){
                toastr.success("Success","User updated successfully")
                dispatch(init())
            }else{
                let errors = response.data.errors.name
                errors.map((error => toastr.error('Error',error)))
            }
        }catch(error){
            console.log('error :>> ', error);
        }

    }
}

export function remove(values){
    return async (dispatch) => {
        try{
            const response = await destroy(UrlService.manage_destroy_user(values.id))
            if(response.status == 200){
                toastr.success("Success","User deleted successfully")
                dispatch(init())
            }else{
                let errors = response.data.errors.name
                errors.map((error => toastr.error('Error',error)))
            }
        }catch(error){
            console.log('error :>> ', error);
        }

    }
}

export function showUpdate(manageUsers){
    
    manageUsers.roles_update = manageUsers.roles.map(e=> e.name)
    
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('manageUsersForm',manageUsers)
    ]
}

export function showDelete(manageUsers){
    manageUsers.roles_update = manageUsers.roles.map(e=> e.name)
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('manageUsersForm',manageUsers)
    ]
}

export function init(){
    return [
        getList(),
        showTabs('tabList'),
        selectTab('tabList')
        
    ]
}