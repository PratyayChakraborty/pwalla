// import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { ERROR_AUTH, LOADING_AUTH, SUCCESS_AUTH } from "./Auth.Type"
import axios from 'axios';

export const AdminLogin = (creds, navigate) => async (dispatch) => {
    // const navigate = useNavigate

    dispatch({ type: LOADING_AUTH })
    return await axios.post("https://policeapp-backend.onrender.com/admin/login", creds).then((res) => {

        dispatch({
            type: SUCCESS_AUTH,
            payload: res.data

        })
        console.log(res);
        if (res.status === 200) {
            alert(res.data.message)
            navigate("/Dashboard")
        }

    }).catch((err) => {
        dispatch({
            type: ERROR_AUTH,
            payload: err
        })
        if (err.response.status === 404 || err.response.status===401) {
            alert(err.response.data.message)
        
        } else {
            dispatch({
                type: ERROR_AUTH,
                payload: err
            })
        }
        console.log('Error:', err);
    })
}
