import axios from "axios";

export const loginCall = async (user,dispatch) =>{
    dispatch({type: "LOGIN_START"});
    try{
        const res = await axios.post("/auth/login", user);
        console.log("RES DATA: ", res.data);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    }catch(err){
        dispatch({type: "LOGIN_FAILED", payload: err})
    }
}