import { ERROR_PoliceDetails, LOADING_PoliceDetails, SUCCESS_PoliceDetails } from "./PoliceDetails.Type"

const initialState = {
    loading: false,
    error: false,
    data: []
}
export const PoliceDetailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING_PoliceDetails: {
            return {
                ...state,
                loading: true, error: false
            }
        }
        case SUCCESS_PoliceDetails: {
            return {
                ...state,
                loading: false, error: false, data: payload
            }
        }
        case ERROR_PoliceDetails: {
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
