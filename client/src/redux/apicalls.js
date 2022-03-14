import {
  loginfailure,
  loginStart,
  loginSuccess,
  updatefailure,
  updateStart,
  updateSuccess,
} from "./userRedux";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    // window.location.replace("/");
    alert("login success");
  } catch (error) {
    dispatch(loginfailure());
    console.log("login failure" + error);
  }
};

// update user
// export const update = async (id, dispatch, user) => {
//   dispatch(updateStart());
//   try {
//     const res = await axios.put(`/users/${id}`);
//     dispatch(updateSuccess(id, user));
//     alert("update success");
//     console.log(res);
//   } catch (error) {
//     dispatch(updatefailure());
//     console.log("login failure" + error);
//   }
// };
// const dispatch = useDispatch();

// const handleUpdate = async (e) => {
//   e.preventDefault();
//   update(dispatch, { username, email, number });
// };
