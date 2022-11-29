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
axios.defaults.baseURL = "http://localhost:3030/";
axios.defaults.headers.Authorization =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg1YWNkYzBjMmU3YThhNmFmZGY0ZWQiLCJyb2xlIjoiVXNlciIsImVtYWlsIjoibXVoYW1tYWRhcnlhbjM0QGdtYWlsLmNvbSIsImlhdCI6MTY2OTcwNDkyNH0.x4CS52V_Y6yeA7WqXz63tb6vBmUveyeOmAHg3V0Tzo8";
axios.interceptors.request.use(
  (req) => {
    // req.headers.Authorization =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgyNjY3YTE5MmVmY2QyNDhjZDk3NTEiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6Im11aGFtbWFkYXJ5YW4zNEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkJhYmFyIEF6YW0iLCJpYXQiOjE2Njk1MzA3MzB9.YhWhGCu4SRo5XzWMP3R_j43tNKEw5mZRcM__ZUsD9jg";
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
    return Promise.reject(error);
  }
);
// axios.defaults.timeout = 15000;
// axios.defaults.timeoutErrorMessage = "Server Can't be reached";
export default axios;
