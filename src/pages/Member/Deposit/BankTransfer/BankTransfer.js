import { useEffect, useReducer, useState, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./BankTransfer.module.scss";
import { dataBankTranfer } from "~/constants/mock-member/dataBanktranfer";
import * as userService from "~/services/userService";
import { Store } from "~/Store";
import LoadingBox from "~/components/LoadingBox/LoadingBox";
import Select from "react-select";
const cx = classNames.bind(styles);

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        paymentGatewayTypeList: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const number = [250, 500, 1600, 2700, 5500];

function BankTransfer({ code }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(0);
  const [optionsBank, setOptionsBank] = useState([
    { value: "MB", label: "Maybank Berhad" },
    { value: "PBB", label: "Public Bank Berhad" },
    { value: "CIMB", label: "CIMB Bank Berhad" },
  ]);
  const [rate, setRate] = useState(1.0);

  const [{ paymentGatewayTypeList, loading }, dispatch] = useReducer(reducer, {
    paymentGatewayTypeList: [],
    loading: true,
  });
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo }= state

  useEffect(() => {
    const fetchList = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      const result = await userService.getPaymentGatewayTypeList(code);
      if (result?.status === 0) {
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      }
    };
    fetchList();
  }, [code]);

  const onClickBankHandler = (index, data) => {
    setActive(index);
    setRate(data.t_currency_rate);
    var temp = [];
    for (var item of data.bank_data) {
      const newOptions = { value: item, label: item + " Bank Berhad" };
      temp.push(newOptions);
    }
    setOptionsBank(temp);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  /* const handleChangeButton = (event) => {
    setActive(event.target.id);
    setValue(event.target.value);
  }; */

  return loading ? (
    <LoadingBox />
  ) : (
    <div className={cx("wrapper")}>
      <div className={cx("Banktranfer-bank")}>
        <p className={cx("bank-title")}></p>
        <div className={cx("bank-block")}>
          {paymentGatewayTypeList?.map((item, index) => (
            <div
              key={index}
              className={cx("bank-item", active === index ? "active" : "")}
              onClick={() => onClickBankHandler(index, item)}
            >
              <p className={cx("name")}>{item.payment_gateway_code}</p>
            </div>
          ))}
        </div>
      </div>
      <form>
        <div className={cx("deposit-channel")}>
          <p className={cx("channel-title")}>Deposit Channel*</p>
          <div className={cx("channel-select")}>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={optionsBank}
              style={styles.select}
            />
          </div>
        </div>
        <div className={cx("deposit-currency")}>
          <p className={cx("currency-title")}>Currency</p>
          <div className={cx("currency-select")}>
            <input
              disabled
              className={cx("input")}
              value="MYR"
            />
          </div>
        </div>
        <div className={cx("deposit-currency")}>
          <p className={cx("currency-title")}>Amount(MYR) *</p>
          <div className={cx("currency-select")}>
            <input
              disabled
              placeholder="0.00"
              className={cx("input")}
              value={(value * rate).toFixed(2)}
            />
          </div>
        </div>
        <div className={cx("deposit-currency")}>
          <p className={cx("currency-title")}>Currency Rate</p>
          <div className={cx("currency-select")}>
            <input disabled placeholder="1.0000" className={cx("input")} value={rate}/>
          </div>
        </div>
        <div className={cx("deposit-currency")}>
          <p className={cx("currency-title")}>Receive Amount</p>
          <div className={cx("currency-select")}>
            <input disabled placeholder="0.00" className={cx("input")} />
          </div>
        </div>
        <div className={cx("deposit-currency")}>
          <p className={cx("currency-title")}>Promotion</p>
          <div className={cx("currency-select")}>
            <p>{userInfo.promotionList}</p>
          </div>
        </div>
        <div className={cx("block-btn")}>
          <p className={cx("channel-title")}></p>
          <button className={cx("btn-submit")}>SUBMIT</button>
          <button className={cx("btn-upload")}>UPLOAD RECEIPT</button>
        </div>
      </form>
    </div>
  );
}

export default BankTransfer;
