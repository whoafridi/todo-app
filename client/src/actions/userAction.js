import axios from "axios";
import swal from "sweetalert";
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    await axios.post("http://localhost:5000/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
    window.location.href = "http://localhost:3001/login";
    swal("Good job!","Successfully registered!","success");

  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
    swal("..","registered failed!","warning");
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("http://localhost:5000/signin", user);
    // console.log(response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    swal("Good job!","Successfully login!","success");
    window.location.href = "http://localhost:3001/home";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
    swal("error","Wrong mail or password","warning");
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "http://localhost:3001/login";
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    const response = await axios.get("http://localhost:5000/getallusers");
    // console.log(response.data);
    dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_USERS_FAIL", payload: err });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    await axios.post("http://localhost:5000/deleteuser", { userid });
    swal("User Deleted Success!", "success");
    window.location.reload();
    // console.log(res);
  } catch (error) {
    swal("Errro While Deleteing User");
  }
};