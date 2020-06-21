import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import LoginReducer from '../pages/Login/loginReducer'
import TabReducer from '../components/common/tab/tabReducer'
import BillingCycleReducer from '../pages/BillingCycle/billingCycleReducer'
import ManageUserReducer from '../pages/Manage/ManageUser/manageUsersReducer'



const rootReducer = combineReducers({
    loginReducer: LoginReducer,
    form: formReducer,
    toastr:toastrReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    manageUsers: ManageUserReducer
})

export default rootReducer