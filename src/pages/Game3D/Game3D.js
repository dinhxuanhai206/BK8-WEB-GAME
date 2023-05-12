import React,{useEffect} from "react";
import { useNavigate, Outlet, Link, useLocation } from "react-router-dom";
import TabPageLogo from "~/components/TabPageLogo/TabPageLogo";
import classNames from "classnames/bind";
import styles from "./Game3D.module.scss";
import BannerSlideShow from "~/components/BannerSlideShow/BannerSlideShow";
import { BANNER_3DGAME } from "../../constants/image3DGame";
import { dataTabPage3DGame } from "~/constants/mock-3dgame/dataTabPageLogo";

const cx = classNames.bind(styles);

const banner3DGame = [
  {
    image: BANNER_3DGAME.RollMatchWin,
    link: "/promos",
  },
  {
    image: BANNER_3DGAME.RollTheDice,
    link: "/promos",
  },
  {
    image: BANNER_3DGAME.StrikeDiceGames,
    link: "/promos",
  },
];

const Game3D = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/games") {
      navigate(`kingmaker`);
    }
  }, [pathname]);

  return (
    <div className={cx("lottery-wrapper")}>
      <div className={cx("banner-lottery")}>
        <BannerSlideShow dataBanner={banner3DGame} />
      </div>
      <div className={cx("lottery-body")}>
        <div className={cx("container")}>
          <TabPageLogo data={dataTabPage3DGame} positionActive={0} />
          <div className={cx("lottery-content")}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game3D;
