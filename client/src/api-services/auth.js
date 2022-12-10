// import { setUser } from "../store";
// import { setLogout } from "store";
import createNotification from "../common/create-notification";
import { apiRequest, removeKeys } from "../utils/helper";
import {
  LOGIN_ROUTE,
  GET_USER_ROUTE,
  INVITE_USER_ROUTE,
  UPDATE_USER_ROUTE,
  GET_ALL_USERS_ROUTE,
  SET_PASSWORD,
} from "../utils/endpoints";
import { setToken } from "../store";
// import { setFormError } from "helpers/hook-form-helper";

export const inviteUser = async ({ data }) => {
  const res = await apiRequest({
    type: "post",
    path: INVITE_USER_ROUTE,
    body: data,
  });
  if (res.status === 200) {
    createNotification("success", res?.data?.msg);
  }
};

export const login = async ({ data, dispatch, navigate }) => {
  const res = await apiRequest({ type: "post", path: LOGIN_ROUTE, body: data });
  if (res.status === 200) {
    dispatch(setToken(res?.headers?.authorization));
    createNotification("success", res?.data?.msg);
    navigate("/");

    // dispatch(
    //   setUser({ user: res?.data?.user, token: res?.headers?.authorization })
    // );
    // router.push("/");
  }
  // else {
  // setFormError(res, setError);
  // }
};

export const getUser = async ({ setUser, reset, dispatch }) => {
  const res = await apiRequest({
    type: "get",
    path: GET_USER_ROUTE,
  });
  if (res.status === 200) {
    if (reset) {
      removeKeys(res.data.user, ["__v", "_id"]);
    }

    setUser(res.data.user);
    // reset(res.data.user)
    const { email, username } = res.data.user;
    reset({
      newEmail: email,
      newUsername: username,
    });
  }
};

export const getAllUsers = async ({ setUsers, setLoading, setAllUsers }) => {
  setLoading(true);
  const res = await apiRequest({
    type: "get",
    path: GET_ALL_USERS_ROUTE,
  });

  if (res.status === 200) {
    setUsers(res?.data.users);
    setAllUsers(res?.data.users);
  }
  // else {
  // dispatch(setLogout());
  // router.push("/login");
  // }
  setLoading(false);
};

export const updateUser = async ({ setUser, data }) => {
  const res = await apiRequest({
    type: "put",
    path: UPDATE_USER_ROUTE,
    body: data,
  });
  if (res.status === 200) {
    setUser({ user: res?.data });
  }
  // else {
  // dispatch(setLogout());
  // router.push("/");
  // }
};

export const setPassword = async ({ data, navigate }) => {
  const res = await apiRequest({
    type: "put",
    path: SET_PASSWORD,
    body: data,
  });
  if (res.status === 201) {
    navigate("/login");
  }
  // else {
  // dispatch(setLogout());
  // router.push("/");
  // }
};
