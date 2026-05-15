import axios from "axios"
import { serverUrl } from "../App"
import { setUserData } from "../redux/userSlice";

 export const getCurrrentUser = async (dispatch) => {
    try {
        const result = await axios.get(serverUrl+"/api/user/current",{withCredentials:true});
        dispatch(setUserData(result.data));
    } catch (error) {
        console.log("Error fetching current user:", error);
    }
}