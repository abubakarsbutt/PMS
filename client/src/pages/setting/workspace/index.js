import Sidebar from "../../../components/layout/sidebar";
import Navbar from "../../../components/layout/navbar";
import SettingTabs from "../../../components/settingtabs";
import DetailImage from "../../../components/detail-page-image";
import Image from "../../../components/image";

import img1 from "../../../assets/Ellipse 11.svg";
import img2 from "../../../assets/Ellipse 10.svg";

import style from "./workspace.module.scss";

const Workspace = () => {
  return (
    <div className={style.container}>
      <div className={style.display}>
        <Sidebar />
        <div className={style.data}>
          <Navbar title="SETTINGS" />
          <SettingTabs
            title1="MY SETTING"
            title2="MEMBERS"
            title3="WORKSPACE"
            title4="PROJECT"
            title5="LOGIN"
          />
          <div className={style.img}>
            <Image title="Workspace Name joined" img={img1} />
            <DetailImage title="ADD SPACE" img={img2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
