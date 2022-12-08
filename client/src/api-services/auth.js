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
  USER_BY_NAME_EMAIL,
} from "../utils/endpoints";
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

export const login = async ({ data }) => {
  const res = await apiRequest({ type: "post", path: LOGIN_ROUTE, body: data });
  if (res.status === 200) {
    console.log(res?.headers?.authorization);
    createNotification("success", res?.data?.msg);

    // dispatch(
    //   setUser({ user: res?.data?.user, token: res?.headers?.authorization })
    // );
    // router.push("/");
  }
  // else {
  // setFormError(res, setError);
  // }
};

export const getUser = async ({ setUser, token, reset }) => {
  const res = await apiRequest({
    type: "get",
    path: GET_USER_ROUTE,
    ...(token && {
      config: {
        headers: {
          Authorization: token,
        },
      },
    }),
  });
  if (res.status === 200) {
    if (reset) {
      removeKeys(res.data.user, ["__v", "_id"]);
    }
    setUser(res.data.user);
    reset(res.data.user);
    // dispatch(setUser({ user: res?.data }));
  }
  // else {
  // dispatch(setLogout());
  // router.push("/login");
  // }
};

export const getAllUsers = async ({ setUsers, setLoading }) => {
  setLoading(true);
  const res = await apiRequest({
    type: "get",
    path: GET_ALL_USERS_ROUTE,
  });

  if (res.status === 200) {
    setUsers(res?.data);
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

export const getByNameOrEmail = async ({ data, setUser }) => {
  const res = await apiRequest({
    type: "get",
    path: USER_BY_NAME_EMAIL,
    body: data,
  });
  if (res.status === 200) {
    setUser(res.data);
    // dispatch(setUser({ user: res?.data }));
  }
  // else {
  // dispatch(setLogout());
  // router.push("/login");
  // }
};
