import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import img from "../../../assets/logo-removebg-preview.png";
import LogoImage from "../../../assets/logo-removebg-preview.png";
import eye from "../../../assets/eye.svg";
import eyeClose from "../../../assets/eyeClose.svg";
import style from "./login.module.scss";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { login } from "../../../api-services/auth";

const ErpLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({});

  const onLogin = (data) => {
    console.log(data);
    login({ data, dispatch, navigate });
  };

  return (
    <div className={style.downMd}>
      <div className={style.loginMain}>
        <div className={style.loginOverlay}>
          <div className={style.loginCardParent}>
            <div className={style.loginCard}>
              <div className={style.loginContent}>
                <img src={LogoImage} width="110px" alt="logo" />
                <span className={style.loginTitle}>Log in Your Account</span>
                <form
                  className={style.loginForm}
                  onSubmit={handleSubmit(onLogin)}
                >
                  <div>
                    <label className={style.loginLabel}>
                      Your Email
                      <input
                        type="email"
                        name="email"
                        className={style.loginInput}
                        placeholder="Enter Your Email"
                        {...(register && register("email"))}
                      />
                    </label>
                  </div>

                  <div style={{ marginTop: ".5rem", position: "relative" }}>
                    <label className={style.loginLabel}>
                      Your Password
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className={style.loginInput}
                        name="password"
                        placeholder="Enter Password"
                        {...(register && register("password"))}
                      />
                      {passwordVisible ? (
                        <img
                          src={eyeClose}
                          alt=""
                          className={style.img}
                          onClick={() => setPasswordVisible((prev) => !prev)}
                        />
                      ) : (
                        <img
                          src={eye}
                          alt=""
                          className={style.img}
                          onClick={() => setPasswordVisible((prev) => !prev)}
                        />
                      )}
                    </label>
                  </div>
                  <div className={style.loginFPassContainer}>
                    <span
                      className={style.loginForgetPass}
                      // onClick={() => navigate("/forgot")}
                    >
                      Forgot Password
                    </span>
                  </div>
                  <button
                    type="submit"
                    className={style.loginSubmit}
                    disabled={isLoading || false}
                    style={{ pointerEvents: isLoading ? "none" : "auto" }}
                  >
                    LOG IN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ErpLogin;
