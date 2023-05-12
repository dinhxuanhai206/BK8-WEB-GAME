import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./MenuWalletTranferTo.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import images from "~/constants/images";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

const defaultFn = () => {};

function MenuWalletTranferTo({
  children,
  items = [],
  onChange = defaultFn,
  hideOnClick = false,
  titles,
  setTitleTo,
  setShowTo
}) {
  const [focusItem, setFocusItem] = useState(-1);
  const [childrenItems, setChildrenItems] = useState([]);


  const OnClickHandler = (item, key) => {
    if (focusItem === -1 || focusItem !== key) {
      setFocusItem(key);
      setChildrenItems(item.children);
    } else {
      setFocusItem(-1);
      setChildrenItems([]);
    }
  };

  const handleChangeTitleF = (title) => {
    setTitleTo(title)
    setShowTo(false)
  }

  return (
    <div className={cx("menu-wallet-wrapper")} tabIndex="-1">
      <div id={cx("tooltip")} className={cx("wallet-tooltip")} role="tooltip">
        <div
          id={cx("arrow")}
          className={cx("wallet-arrow")}
          data-popper-arrow
        ></div>
      </div>
      <PopperWrapper className={cx("menu-wallet-items")}>
        {items?.map((item, index) => (
          <div className={cx("menu-wallet-item-wrapper")} key={index}  >
            <div className={cx("menu-wallet-item")} key={index} onClick={() => OnClickHandler(item, index)}>
                <div className={cx("wallet-img")}><img src={item.img} alt="" className={cx("img")}/></div>
              <span className={cx("wallet-title")} >{item.title}</span>
              <span
                className={cx("wallet-button")}
          
                style={{
                  background:
                    focusItem === index &&
                    `url(${images.iconCollapse}) no-repeat`,
                  backgroundSize: focusItem === index && "100% 100%",
                }}
              ></span>
            </div>
            {focusItem !== -1 &&
              focusItem === index &&
              childrenItems?.map((childItem, index2) => (
                <div className={cx("menu-wallet-child-item")} key={index2}>
                  <span className={cx("wallet-child-title")} onClick={()=> handleChangeTitleF(childItem.title)}>
                    {childItem.title}
                  </span>
                  <span className={cx("wallet-child-value")}>
                    {childItem.value.toFixed(2)}
                  </span>
                </div>
              ))}
          </div>
        ))}
      </PopperWrapper>
    </div>
  );
}

export default MenuWalletTranferTo;
