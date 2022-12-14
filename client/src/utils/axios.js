// import axios from "axios";

// import createNotification from "common/create-notification";

// // if (process.env.NODE_ENV === "development") {
// //   // axios.defaults.baseURL = process.env.URL_DEV;
// // } else {
// //   axios.defaults.baseURL = "https://www.dev.yehaww.com/api/";
// //   // axios.defaults.baseURL = process.env.URL_PRODUCTION;
// // }
// axios.defaults.baseURL = "http://localhost:3030/";

// axios.interceptors.request.use(
//   (req) => {
//     req.headers.Authorization = localStorage.getItem("token");
//     return req;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (res) => {
//     if (["post", "put", "delete"].includes(res?.config?.method)) {
//       createNotification("success", res?.data?.msg || "Success");
//     }
//     return res;
//   },
//   (error) => {
//     console.error(error.message);
//     createNotification(
//       "error",
//       error?.response?.data?.msg || "Something went wrong "
//     );
//     if (
//       error?.response?.statusText === "Unauthorized" &&
//       error?.response?.status === 401
//     ) {
//     }
//     return error.response;
//   }
// );

// export default axios;

import axios from "axios";
import createNotification from "../common/create-notification";
axios.defaults.baseURL = "http://localhost:3030/";

axios.interceptors.request.use(
  (req) => {
    req.headers.Authorization = localStorage.getItem("token");
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (successRes) => {
    return successRes;
  },
  (error) => {
    createNotification(
      "error",
      error?.response?.data?.msg || "Something went wrong!"
    );

    return Promise.reject(error);
  }
);
// axios.defaults.timeout = 15000;
// axios.defaults.timeoutErrorMessage = "Server Can't be reached";
export default axios;
