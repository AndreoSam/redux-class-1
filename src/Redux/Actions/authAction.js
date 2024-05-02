import { authConstant } from './ActionConst'
import axios from 'axios'
import { base_url, signin_url } from '../../Api/apiUrl'

export const signUp = (uservalue) => {
    //here uservalue means the form value coming from the registration form 
    //action request send to the reducer

    return async (dispatch) => {
        dispatch({ type: `${authConstant.USER_REGISTER}_REQUEST` });
        axios.post(base_url, uservalue, {
            headers: {
                "Content-Type": "application/formdata",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => {
                dispatch({
                    type: `${authConstant.USER_REGISTER}_SUCCESS`,
                    payload: {
                        message: res.data.message, data: res.data, status: res.status
                    },
                });
            })
            .catch((err) => {
                dispatch({
                    type: `${authConstant.USER_REGISTER}_FAILURE`,
                    payload: {
                        errorMsg: "Data is not registered"
                    },
                });
            })
    }
}

export const signin = (uservalue) => {
    //here uservalue means the form value coming from the registration form 
    //action request send to the reducer

    return async (dispatch) => {
        dispatch({ type: `${authConstant.USER_LOGIN}_REQUEST` });
        axios.get(signin_url, uservalue, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => {
                window.sessionStorage.setItem("authtoken", res.data.token);
                dispatch({
                    type: `${authConstant.USER_LOGIN}_SUCCESS`,
                    payload: {
                        message: res.data.message, data: res.data, status: res.status
                    },
                });
            })
            .catch((err) => {
                dispatch({
                    type: `${authConstant.USER_LOGIN}_FAILURE`,
                    payload: {
                        errorMsg: "Login Failed"
                    },
                });
            })
    }
}

export const signout = (uservalue) => {
    //here uservalue means the form value coming from the registration form 
    //action request send to the reducer

    return async (dispatch) => {
        dispatch({ type: `${authConstant.USER_LOGOUT}_REQUEST` });
        if (sessionStorage.getItem("authtoken") !== "") {
            sessionStorage.clear()

            dispatch({
                type: `${authConstant.USER_LOGOUT}_SUCCESS`,
                payload: {
                    message: "Logout successful"
                },
            });
        }
        else {
            dispatch({
                type: `${authConstant.USER_LOGOUT}_FAILURE`,
                payload: {
                    errorMsg: "Logout failed"
                },
            });
        }
    }
}

export const viewProfile = () => {
    return async (dispatch) => {
        dispatch({ type: `${authConstant.PROFILE}_REQUEST` });
        let authtoken = window.sessionStorage.getItem("authtoken")
        axios.get("add the image url", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
                "X-access-token": authtoken
            }
        })
            .then((res) => {
                console.log("Profile response: ", res);
                dispatch({
                    type: `${authConstant.PROFILE}_SUCCESS`,
                    payload: {
                        message: res.data.message
                    },
                });
            })
            .catch((err) => {
                dispatch({
                    type: `${authConstant.PROFILE}_FAILURE`,
                    payload: {
                        errorMsg: { errorMsg: "Error to find user" }
                    },
                })
            })
    }
}