import { useState, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./TranferMobile.module.scss";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import images from "~/constants/imagePromosMobile";
import { BiRefresh } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import TranferCollab from "~/components/TranferCollab/TranferCollab";
import TranferContent from "~/components/TranferCollab/TranferContent/TranferContent";
import MenuWallet from "~/components/Popper/MenuWallet/MenuWallet";
import MenuWalletTranfer from "~/components/Popper/MenuWallet/MenuWalletTranfer";
import MenuWalletTranferTo from "~/components/Popper/MenuWallet/MenuWalletTranferTo";
import { MENU_WALLET_ITEMS_TRANFER } from "~/constants/mockHeader/dataHeader";
import { Store } from "~/Store";

const cx = classNames.bind(styles);

const tabTranfer = [
  {
    key: "all",
    display: "ALL",
  },
  {
    key: "sport",
    display: "SPORTS",
  },
  {
    key: "eSport",
    display: "E-SPORTS",
  },
  {
    key: "casino",
    display: "CASINO",
  },
  {
    key: "slots",
    display: "SLOTS",
  },
  {
    key: "fishing",
    display: "FISHING",
  },
  {
    key: "games",
    display: "3D GAMES",
  },
  {
    key: "lottery",
    display: "LOTTERY",
  },
];

const dataTranferMobile = [
  { id: 1, title: "AE Casio", category: ["all", "sport"] },
  { id: 2, title: "AllBet", category: ["all", "eSport"] },
  { id: 3, title: "Asia Gaming", category: ["all", "casino"] },
  { id: 4, title: "Big Gaming", category: ["all", "slots"] },
  { id: 5, title: "BK8-Sports", category: ["all", "fishing"] },
  { id: 6, title: "c-Sports", category: ["all", "games"] },
  { id: 7, title: "Dream Gaming", category: ["all", "lottery"] },
  { id: 8, title: "EBET", category: ["all", "sport"] },
];

function TranferMobile() {
  const [renderTab, setRenderTab] = useState("all");
  const [value, setValue] = useState(0);
  const [valueCode, setValueCode] = useState("");
  const [number, setNumber] = useState(true);
  const [title, setTitle] = useState("My Wallet");
  const [titleTo, setTitleTo] = useState("My Wallet");
  const [show, setShow] = useState(false);
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);
  const [focusTranferCollab, setFocusTranferCollab] = useState(1);
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state

  const handleChangeEye = () => {
    setNumber(!number);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleShowFrom = () => {
    setShowFrom(!showFrom);
  };
  const handleShowTo = () => {
    setShowTo(!showTo);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangeCode = (event) => {
    setValueCode(event.target.value);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("coin")}>
          <p className={cx("main")}>Main Wallet</p>
          <div className={cx("left")}>
            <div onClick={handleChangeEye}>
              {number ? (
                <AiOutlineEye
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginBottom: "-6px",
                  }}ư88
                />
              ) : (
                <AiOutlineEyeInvisible
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginBottom: "-6px",
                  }}
                />
              )}
            </div>
            <div className={cx("block")}>
              <div className={cx("vnd")}>
                MYR <span>{number ? userInfo.balance : '***'}</span>{" "}
                <BiRefresh
                  style={{
                    color: "blue",
                    fontSize: "20px",
                    marginBottom: "-4px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("right")}>
          <div className={cx("img")}>
            <img src={images.restore} alt="" className={cx("img-store")} />
          </div>
          <p className={cx("title")}>Restore</p>
        </div>
      </div>
      {!show ? (
        <div className={cx("show-blance")} onClick={() => handleShow(true)}>
          <p className={cx("show")}>Show Blance / Turnover </p>
          <AiOutlinePlusCircle style={{ fontSize: "30px" }} />
        </div>
      ) : (
        <div className={cx("content-show")}>
          <div className={cx("hide-blance")} onClick={() => handleShow(false)}>
            <p className={cx("show")}>Hide Blance / Turnover </p>
            <AiOutlineMinusCircle style={{ fontSize: "30px" }} />
          </div>
          <div className={cx("inner")}>
            <Swiper
              slidesPerView={3}
              spaceBetween={8}
              modules={[Pagination]}
              className={cx("mySwiper")}
            >
              {tabTranfer.map((item, index) => (
                <SwiperSlide className={cx("items")} key={index}>
                  <button
                    onClick={() => setRenderTab(item.key)}
                    className={cx("btn", renderTab === item.key && "active")}
                  >
                    {item.display}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={cx("content-turnover")}>
            <div className={cx("total")}>
              <p>Weekly Turnover Total</p>
              <div className={cx("block-total")}>
                <p>0.00</p>
                <BiRefresh
                  style={{
                    color: "blue",
                  }}
                />
              </div>
            </div>
          </div>
          <div className={cx("tranfer-list")}>
            {dataTranferMobile?.map((item, index) => {
              if (renderTab === "all") {
                return (
                  <div key={index} className={cx("item")}>
                    <TranferCollab
                      title={item.title}
                      bg={"#bebebe"}
                      index={item.id}
                      onClick={() => setFocusTranferCollab(item.id)}
                      {...{ focusTranferCollab, setFocusTranferCollab }}
                    >
                      <TranferContent />
                    </TranferCollab>
                  </div>
                );
              } else {
                if (item.category?.includes(renderTab)) {
                  return (
                    <div key={index} className={cx("item")}>
                      <TranferCollab
                        title={item.title}
                        bg={"#bebebe"}
                        index={item.id}
                        onClick={() => setFocusTranferCollab(item.id)}
                        {...{ focusTranferCollab, setFocusTranferCollab }}
                      >
                        <TranferContent />
                      </TranferCollab>
                    </div>
                  );
                }
                return null;
              }
            })}
          </div>
        </div>
      )}
      <form className={cx("form")}>
        <p className={cx("title")}>
          Amount <span>*</span>
        </p>
        <div className={cx("inputs")}>
          <input
            type="number"
            value={value}
            placeholder="Amount"
            onChange={handleChange}
            className={cx("input")}
          />
        </div>
        <p className={cx("title")}>
          From <span>*</span>
        </p>
        <div className={cx("from")} onClick={handleShowFrom}>
          <MdKeyboardArrowDown style={{ color: "#0062c9", fontSize: "18px" }} />
          <p>{`${title} ${"(0.00 VND)"}`}</p>
        </div>
        {showFrom && (
          <div>
            {" "}
            <div className={cx("title-main")}>Main Wallet</div>
            <MenuWalletTranfer items={MENU_WALLET_ITEMS_TRANFER} {...{title, setTitle}} {...{showFrom, setShowFrom}}>
              <div>Main Wallet</div>
            </MenuWalletTranfer>
          </div>
        )}
        <p className={cx("title")}>
          To <span>*</span>
        </p>
        <div className={cx("to")} onClick={handleShowTo}>
          <MdKeyboardArrowDown style={{ color: "#0062c9", fontSize: "18px" }} />
          <p>{`${titleTo} ${"(0.00 VND)"}`}</p>
        </div>
        {showTo && (
          <div>
            {" "}
            <div className={cx("title-main")}>Main Wallet</div>
            <MenuWalletTranferTo items={MENU_WALLET_ITEMS_TRANFER}  {...{titleTo, setTitleTo}} {...{showTo, setShowTo}}>
              <div>Main Wallet</div>
            </MenuWalletTranferTo>
          </div>
        )}
        <p className={cx("title")}>
          Special Code <span>*</span>
        </p>
        <div className={cx("inputs")}>
          <input
            value={valueCode}
            placeholder="Amount"
            onChange={handleChangeCode}
            className={cx("input")}
          />
        </div>
        <p className={cx("title")}>
          Promo Code <span>*</span>
        </p>
        <div className={cx("inputs")}>
          <input
            disabled
            value={valueCode}
            onChange={handleChangeCode}
            className={cx("input")}
          />
        </div>
        <div className={cx("button")}>
          <button className={cx("btn-submit")}>SUBMIT</button>
        </div>
        <div className={cx("button")}>
          <button className={cx("btn-clear")}>CLEAR</button>
        </div>
      </form>
    </div>
  );
}

export default TranferMobile;
