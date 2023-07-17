import React from 'react'
import { ERROR_PoliceDetails, LOADING_PoliceDetails, SUCCESS_PoliceDetails } from "./PoliceDetails.Type"

export const PoliceDetailsAction = () => async (dispatch) => {

    try {
        dispatch({ type: LOADING_PoliceDetails });
        const res = await axios.get('/https://policeapp-backend.onrender.com/admin/Police/Police-details')
        dispatch({ type: SUCCESS_PoliceDetails, payload: res.data });
        const data = res.data
    } catch {
        console.log(err);
        dispatch({ type: ERROR_PoliceDetails });
    }

    
}


