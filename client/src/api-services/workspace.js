// import { setUser } from "../store";
// import { setLogout } from "store";
import createNotification from "../common/create-notification";
import { apiRequest, removeKeys } from "../utils/helper";
import { CREATE_WORKSPACE } from "../utils/endpoints";
import { setToken } from "../store";

export const createWorkspace = async ({ setWorkspace, data }) => {
  const res = await apiRequest({
    type: "post",
    path: CREATE_WORKSPACE,
    body: data,
  });
  if (res.status === 200) {
    setWorkspace({ user: res?.data });

    //   createNotification("success",)
  }
};
