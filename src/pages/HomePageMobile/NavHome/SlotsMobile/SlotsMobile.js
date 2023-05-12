import classNames from "classnames/bind";
import styles from "./SlotsMobile.module.scss";
import { dataSlots } from "~/constants/mockNavHomeMobile/dataTab";
import { useNavigate } from 'react-router-dom'
const cx = classNames.bind(styles);

function SlotsMobile() {
  const navigate = useNavigate()
  const onClickHandler = (item) => {
    navigate('/mslots/'+ item.provider_code, {state:{label: item.provider_name}})
  }

  return (
    <div>
      <div className={cx("wrapper")}>
        {dataSlots.map((item, index) => (
          <div key={index} className={cx("block-item")}>
            <div className={cx("img")} onClick={() => onClickHandler(item)}>
              <img src={item.image} alt="" className={cx("img-item")} />
            </div>
            <p className={cx("text")}>{item.provider_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlotsMobile;
