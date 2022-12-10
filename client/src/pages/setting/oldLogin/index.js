import Button from "../../../components/button/index";
import Navbar from "../../../components/layout/navbar";
import Sidebar from "../../../components/layout/sidebar";
import SettingTabs from "../../../components/settingtabs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import style from "./login.scss";

import { useForm } from "react-hook-form";
import { login } from "../../../api-services/auth";

const MySetting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({});
  const onLogin = (data) => {
    console.log(data);
    login({ data, dispatch, navigate });
  };

  return (
    <div className="container">
      <div className="display">
        <Sidebar />
        <div className="data">
          <Navbar title="LOGIN" />
          <SettingTabs
            title1="MY SETTING"
            title2="MEMBERS"
            title3="WORKSPACE"
            title4="PROJECT"
            title5="LOGIN"
          />
          <form onSubmit={handleSubmit(onLogin)}>
            <div
              style={{
                display: "flex",
                marginTop: "50px",
                marginBottom: "50px",
                flexDirection: "column",
              }}
            >
              <label style={{ marginLeft: "42px", marginBottom: "30px" }}>
                EMAIL
                <input
                  type="email"
                  name="email"
                  style={{ marginLeft: "60px" }}
                  {...(register && register("email"))}
                />
              </label>
              <label style={{ marginLeft: "40px" }}>
                PASSWORD
                <input
                  type="password"
                  name="password"
                  style={{ marginLeft: "20px" }}
                  {...(register && register("password"))}
                />
              </label>
            </div>
            <Button type="submit" title="LOGIN" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MySetting;
