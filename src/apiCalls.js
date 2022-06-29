import {axiosInstance} from "./config";

export const loginCall = async (user,dispatch) =>{
    dispatch({type: "LOGIN_START"});
    try{
        const res = await axiosInstance.post("/auth/login", user);
        console.log("RES DATA: ", res.data);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    }catch(err){
        dispatch({type: "LOGIN_FAILED", payload: err})
    }
}