import { get, post, put, destroy } from '../../services/HttpService'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../../components/common/tab/tabActions'
import UrlService from '../../services/UrlService'

const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export function getList() {
    return async (dispatch) => {
        const request = await get(UrlService.get_billingCycles())
        dispatch({
            type: 'BILLING_CYCLES_FETCHED',
            payload: request
        })
        
    }
}

export const create = (values) => {

    return async (dispatch) => {
        try{
            const response = await post(UrlService.create_billingCycle(), values)
            if(response.status == 200){
                toastr.success("Success","Billing cycle created successfully")
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

export function update(values) {
    return async (dispatch) => {
        try{
            const response = await put(UrlService.update_billingCycle(values.id), values)
            if(response.status == 200){
                toastr.success("Success","Billing cycle updated successfully")
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

export function remove(values) {
    return async (dispatch) => {

        try{
            const response = await destroy(UrlService.destroy_billingCycle(values.id), values)

            if(response.status == 200){
                toastr.success("Success","Billing cycle deleted successfully")
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

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}