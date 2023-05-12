import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./FishingMobile.module.scss";
import { dataFishing } from "~/constants/mockNavHomeMobile/dataTab";
import * as gameService from "~/services/gameService";

const cx = classNames.bind(styles);

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, subData: action.payload, loading: false };
    default:
      return state;
  }
};

function FishingMobile() {
  const navigate = useNavigate()
  const onClickHandler = (item) => {
    navigate('/mfishing/'+ item.provider_code, {state:{label: item.provider_name}})
  }

  return (
    <div>
      <div className={cx("wrapper")}>
        {dataFishing.map((item, index) => (
          <div key={index} className={cx("block-item")}>
            <div className={cx("img")}>
              <img src={item.image} alt="" className={cx("img-item")} onClick={() => onClickHandler(item)} />
            </div>
            <p className={cx("text")}>{item.provider_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FishingMobile;
