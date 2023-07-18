import { LOADING_AUTH, LOGOUT_AUTH, ERROR_AUTH, SUCCESS_AUTH } from "./Auth.Type";

const initialState = {

    loading: false,
    error: false,
    data: [],
    token: null,
}

export const AuthReducer = (state = initialState, { type, payload }) => {


    switch (type) {

        case (LOADING_AUTH): {

            return {
                ...state,
                loading: true, error: false
            }
        }
        case (SUCCESS_AUTH): {

            return {
                ...state,
                loading: false, error: false, data: payload
            }
        }
        case (ERROR_AUTH): {
            return {
                ...state,
                loading: false, error: true,
            }
        }
        case (LOGOUT_AUTH): {
            return {
                ...state,
                loading: false, error: false,

            }
        }
        default: {
            return state;
        }

    }

}