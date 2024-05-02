import { authConstant } from "../Actions/ActionConst";

const initState = {
    //api parameters
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    profile_pic: "",
    status: 0,
    //user defined variables
    message: "",
    error: "",
    authenticated: false,
    authToken: "",
};

const AuthReducers = (state = initState, action) => {
    switch (action.type) {
        case `${authConstant.USER_REGISTER}_REQUEST`:
            return (state = {
                ...state
            });
        case `${authConstant.USER_REGISTER}_SUCCESS`:
            return (state = {
                ...state,
                message: action.payload.message
            });
        case `${authConstant.USER_REGISTER}_FAILURE`:
            return (state = {
                ...state,
                error: action.payload.errorMsg
            });
        //End of registration case

        case `${authConstant.USER_LOGIN}_REQUEST`:
            return (state = {
                ...state
            });
        case `${authConstant.USER_LOGIN}_SUCCESS`:
            return (state = {
                ...state,
                authenticated: true,
                authToken: action.payload.userToken,
                message: action.payload.message
            });
        case `${authConstant.USER_LOGIN}_FAILURE`:
            return (state = {
                ...state,
                error: action.payload.errorMsg
            });
        //End of login case

        case `${authConstant.USER_LOGOUT}_REQUEST`:
            return (state = {
                ...state
            });
        case `${authConstant.USER_LOGOUT}_SUCCESS`:
            return (state = {
                ...state,
                authenticated: false,
                authToken: "",
                message: action.payload.message
            });
        case `${authConstant.USER_LOGOUT}_FAILURE`:
            return (state = {
                ...state,
                error: action.payload.errorMsg
            });
        //End of login case

        default: return state;
    }
}


export default AuthReducers;;