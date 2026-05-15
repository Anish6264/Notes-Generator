import axios from "axios";

import { serverUrl } from "../App";

import {
  setUserData,
  setLoading,
} from "../redux/userSlice";

export const getCurrrentUser = async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const result = await axios.get(
      serverUrl + "/api/user/current",
      {
        withCredentials: true,
      }
    );

    dispatch(setUserData(result.data.user));
  } catch (error) {
    dispatch(setUserData(null));

    console.log(
      "Error fetching current user:",
      error
    );
  } finally {
    dispatch(setLoading(false));
  }
};


export const generateNotes = async(payload)=>{
 try {
  const result = await axios.post(serverUrl+"/api/notes/generate-notes",payload,{withCredentials:true})
  console.log(result.data)
  return result.data;
 } catch (error) {
  console.log(error)
 }
}