const INITIAL_STATE = {list: [], roles:[]}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_USERS_FETCHED':
            return {...state, list: action.payload, roles: action.roles}
        default:
            return state
    }
}