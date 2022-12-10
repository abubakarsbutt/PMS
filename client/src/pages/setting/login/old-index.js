// import { useNavigate } from "react-router-dom";

// import Login from ".";

// import { useAppDispatch } from "store/hooks";
// import AuthService from "services/auth-service";
// import { setCurrentUser, setToken, setUserId } from "store";

import style from "./login.module.scss";

const Login = () => {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  // const handleLogin = async () => {
  //   setIsLoading(true);
  //   const res = await AuthService.login(data);
  //   if (res.status === 200) {
  //     setIsLoading(false);
  //     dispatch(setCurrentUser(res.data));
  //     dispatch(setToken(res.headers.authorization));
  //     dispatch(setUserId(res.data.id));
  //     navigate("/");
  //   }
  //   setIsLoading(false);
  // };

  return (
    <div className={style.downMd}>
      <Login
      // handleLogin={handleLogin}
      />
    </div>
  );
};
export default Login;
