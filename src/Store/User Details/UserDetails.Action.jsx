import React from 'react'
import { ERROR_UserDetails, LOADING_UserDetails, SUCCESS_UserDetails } from "./UserDetails.Type"
import axios from 'axios';

export const UserDetailsAction = () => async (dispatch) => {
    dispatch({ type: LOADING_UserDetails });
    try {
        let res = await axios.get("https://policeapp-backend.onrender.com/admin/user/user-details");
        dispatch({ type: SUCCESS_UserDetails, payload: res.data.userDetail });

        // console.log(res.data.userDetail)
        return res.data.userDetail;
    } catch (err) {
        console.log(err);
        dispatch({ type: ERROR_UserDetails });
    }

    
}


