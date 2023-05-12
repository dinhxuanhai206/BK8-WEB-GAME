import { toast } from "react-toastify";
import md5 from "md5";

import { getError } from "~/utils";
import * as httpRequest from "~/utils/httpRequest";
import moment from "moment";

const merchantId = "devwtt";
const secretKey = "EXtOXnAuFsEi5EYi5xSLgJqAx7eeDXHa";

export const login = async (username, password) => {
  let signature = md5(merchantId + username + secretKey);
  try {
    const res = await httpRequest.post(
      {
        method: "MemberLogin",
        agentId: merchantId,
        signature,
        syslang: 1,
        device: 1,
        data: { username, password },
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (res.status === 0) {
      return res;
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    toast.error(getError(error));
    return false;
  }
};

export const register = async (data, fingerprint) => {
  let signature = md5(merchantId + data.username + secretKey);
  try {
    var res = await httpRequest.post(
      {
        method: "MemberRegister",
        agentId: merchantId,
        signature,
        syslang: 1,
        device: 1,
        data: {
          username: data.username,
          password: data.password,
          confirm_password: data.confirmPassword,
          email: data.email,
          mobile: Number(data.mobile),
          fullname: data.fullName,
          nickname: data?.nickname,
          birth: data?.dob,
          referral: data?.referral,
          fingerprint: fingerprint,
        },
      },
      {
        headers: {
          //'Content-Type': 'application/json',
          //'Access-Control-Allow-Origin': '*',
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          //"Content-Type": "multipart/form-data"
        },
      }
    );
    if (res.status === 0) {
      return res;
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    toast.error(getError(error));
    return false;
  }
};

export const forgot = async (username, email, mobile) => {
  let signature = md5(merchantId + username + secretKey);
  try {
    const res = await httpRequest.post(
      {
        method: "ForgotPassword",
        agentId: merchantId,
        signature,
        syslang: 1,
        device: 1,
        data: { username, email, mobile: Number(mobile) },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (res.status === 0) {
      return res;
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    toast.error(getError(error));
    return false;
  }
};

export const changePassword = async (username, oldpass, password, passconf) => {
  let signature = md5(merchantId + username + secretKey);
  try {
    const res = await httpRequest.post(
      {
        method: "ChangePassword",
        agentId: merchantId,
        signature,
        syslang: 1,
        device: 1,
        data: { username, oldpass, password, passconf },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (res.status === 0) {
      return res;
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    toast.error(getError(error));
    return false;
  }
};

export const getBalance = async (username) => {
  let signature = md5(merchantId + username + secretKey);
  try {
    const res = await httpRequest.post(
      {
        method: "GetBalanceDV",
        agentId: merchantId,
        signature,
        syslang: 1,
        device: 1,
        data: { username },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (res.status === 0) {
      return res;
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    toast.error(getError(error));
    return false;
  }
};
export const getPaymentGatewayType = async (username) => {
  let signature = md5(merchantId + username + secretKey);
  try {
    const res = await httpRequest.post(
      {
        method: "PaymentGatewayType",
        agentId: merchantId,
        signature,
        syslang: 1,
        device: 1,
        data: { username },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (res.status === 0) {
      return res;
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    toast.error(getError(error));
    return false;
  }
};
export const getPaymentGatewayTypeList = async (payment_gateway_type_code) => {
  let signature = md5(merchantId + payment_gateway_type_code + secretKey);
  try {
    const res = await httpRequest.post(
      {
        method: "PaymentGatewayTypeList",
        agentId: merchantId,
        signature,
        syslang: 1,
        device: 1,
        data: { payment_gateway_type_code },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (res.status === 0) {
      console.log(res);
      return res;
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    toast.error(getError(error));
    return false;
  }
};
export const getPromotionList = async (username) => {
  let signature = md5(merchantId + username + secretKey);
  try {
    const res = await httpRequest.post(
      {
        method: "PromotionList",
        agentId: merchantId,
        signature,
        syslang: 1,
        device: 1,
        data: { username },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (res.status === 0) {
      return res;
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    toast.error(getError(error));
    return false;
  }
};
export const getCurrency = async (username) => {
  let signature = md5(merchantId + username + secretKey);
  try {
    const res = await httpRequest.post(
      {
        method: "CurrencyId",
        agentId: merchantId,
        signature,
        syslang: 1,
        device: 1,
        data: { username },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (res.status === 0) {
      return res;
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    toast.error(getError(error));
    return false;
  }
};

export const getOfflineGatewayBank = async (username) => {
  let signature = md5(merchantId + username + secretKey);
  try {
    const res = await httpRequest.post(
      {
        method: "BankAccountList",
        agentId: merchantId,
        signature,
        syslang: 1,
        device: 1,
        data: { username },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (res.status === 0) {
      return res;
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    toast.error(getError(error));
    return false;
  }
};

export const userDeposit = async (
  username,
  amount,
  payment_gateway_type_code,
  resData
) => {
  let signature = md5(merchantId + username + secretKey);
  var today = new Date();
  var bank_in_date = moment().format("YYYY-MM-DD");
  var bank_in_hours = today.getHours();
  var bank_in_minutes = today.getMinutes();
  console.log(resData);
  try {
    const res = await httpRequest.post(
      {
        method: "Deposit",
        agentId: merchantId,
        signature,
        syslang: 1,
        device: 1,
        data: {
          username,
          amount,
          bank_in_date,
          bank_in_hours,
          bank_in_minutes,
          payment_gateway_type_code,
          payment_gateway_code: resData?.payment_gateway_code || null,
          payment_gateway_bank: resData?.payment_gateway_bank || null,
          currency_id: resData?.currency_id || null,
          play_bank_id: resData?.play_bank_id || null,
          bank_account_id: resData?.bank_account_id || null,
          bank_slip: resData?.bank_slip || null,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (res.status === 0) {
      return res;
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    toast.error(getError(error));
    return false;
  }
};

export const getPlayerBank = async (username) => {
  let signature = md5(merchantId + username + secretKey);
  try {
    const res = await httpRequest.post(
      {
        method: "GetPlayerBank",
        agentId: merchantId,
        signature,
        device: 1,
        data: { username },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (res?.status === 0) {
      return res;
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    toast.error(getError(error));
    return false;
  }
};
export const getBankList = async (username) => {
  let signature = md5(merchantId + username + secretKey);
  try {
    const res = await httpRequest.post(
      {
        method: "GetBankList",
        agentId: merchantId,
        signature,
        device: 1,
        data: { username },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (res?.status === 0) {
      return res;
    } else {
      toast.error(res.msg);
    }
  } catch (error) {
    toast.error(getError(error));
    return false;
  }
};
