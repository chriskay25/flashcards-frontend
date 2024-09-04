export const userReducer = (state = {currentUser: null}, action) => {
    switch (action.type) {
        case 'GET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'LOGIN':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'SIGNUP':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
          return state;
    }
}