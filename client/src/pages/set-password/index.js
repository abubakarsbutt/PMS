import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import LogoImage from "../../assets/logo-removebg-preview.png";
import style from "./set-password.module.scss";
import { setPassword } from "../../api-services/auth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../store";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({});
  const [search] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = search.get("token");
    dispatch(setToken(token));
  }, []);

  const onSubmit = (data) => {
    setPassword({ data, navigate });
  };
  return (
    <>
      <div className={style.loginMain}>
        <div className={style.loginOverlay}>
          <div className={style.loginCardParent}>
            <div className={style.loginCard}>
              <div className={style.loginContent}>
                <img src={LogoImage} width="110px" alt="logo" />
                <span className={style.loginTitle}>Set Your Password</span>
                <form
                  className={style.loginForm}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <label className={style.loginLabel}>
                      New Password
                      <input
                        type="password"
                        className={style.loginInput}
                        name="password"
                        placeholder="Your Password"
                        {...(register && register("newPassword"))}
                      />
                    </label>
                  </div>
                  <div>
                    <label className={style.loginLabel}>
                      Confirm New Password
                      <input
                        className={style.loginInput}
                        type="password"
                        name="confirmPassword"
                        placeholder="Re-Enter Password"
                        {...(register && register("confirmPassword"))}
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className={style.loginSubmit}
                    disabled={isSubmitting || false}
                    style={{ pointerEvents: isSubmitting ? "none" : "auto" }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;
