import CookieService from '../../services/cookieService'

const INITIAL_STATE = {
    isLogin: null,
    data: null,
    error: null,
    token: CookieService.get('access_token'),
    user: null,
    checked: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'IS_LOGIN':
            return {
                ...state,
                data: action.payload,
                token: action.token,
                user: action.user
            }
        case 'IS_LOGOUT':
            return {
                ...state,
                token: action.payload,
                user: action.payload
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'CHECKED':
            return {
                ...state,
                checked: action.payload,
            }
        default:
            return state;
    }
}