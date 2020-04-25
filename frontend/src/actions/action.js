import axios from "axios";
export const getAllUsers = () => {
  return dispatch => {
    axios.get("http://localhost:5000/users").then(resp => {
      dispatch({ type: "GET_USER_DATA", payload: resp.data });
    })
  };
};
export const addUser = (username)=>{
  return dispatch => {
    axios.post(`http://localhost:5000/users/add`,{ username: username }).then(resp => {
      if(resp.data == "ok"){
        dispatch(getAllUsers());
      }
    })
  }
}
export const getuserHobbies = (user_id)=>{
  return dispatch => {
    axios.get(`http://localhost:5000/users/hobbies/${user_id}`).then(resp => {
      dispatch({ type: "GET_USER_HOBBIES", payload: resp.data });
    })
  }
}
export const addUserHobby = (payload)=>{
  return dispatch => {
    axios.post(`http://localhost:5000/users/addHobby`,{ 
      user_id: payload.user_id, 
      passion: payload.passion, 
      hobby: payload.hobby, 
      year: payload.year, 
    })
    .then(resp => {
      if(resp.data == "ok"){
        dispatch(getuserHobbies(payload.user_id));
      }
    })
  }
}
export const deleteUserHobby = (id,user_id)=>{
  return dispatch => {
    axios.delete(`http://localhost:5000/users/hobbies/${id}`).then(resp => {
      if(resp.data == "ok"){
        dispatch(getuserHobbies(user_id));
      }
    })
  }
}
