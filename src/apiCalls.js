import axios from 'axios';

export const loginCall = async (user,dispatch) =>{
    dispatch({type: "LOGIN_START"});
    try{
        const res = await axios.post("https://dtamtasocialmedia.herokuapp.com/api/auth/login", user);
        console.log("RES DATA: ", res.data);
        const userToken = JSON.stringify(res.data.token);
        localStorage.setItem("token", userToken);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data.user});
    }catch(err){
        dispatch({type: "LOGIN_FAILED", payload: err})
    }
}