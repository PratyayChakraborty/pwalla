import { ERROR_UserDetails, LOADING_UserDetails, SUCCESS_UserDetails } from "./UserDetails.Type"

const initialState = {
    loading: false,
    error: false,
    data: []
}
export const UserDetailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING_UserDetails: {
            return {
                ...state,
                loading: true, error: false
            }
        }
        case SUCCESS_UserDetails: {
            return {
                ...state,
                loading: false, error: false, data: payload
            }
        }
        case ERROR_UserDetails: {
            return {
                ...state,
                loading: false, error: true
            }
        }
        default: {
            return state
        }
    }
}
