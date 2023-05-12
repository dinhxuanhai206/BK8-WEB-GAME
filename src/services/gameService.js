import { toast } from 'react-toastify'
import md5 from 'md5'

import { getError } from '~/utils';
import * as httpRequest from '~/utils/httpRequest';

const merchantId = 'devwtt'
const secretKey = 'EXtOXnAuFsEi5EYi5xSLgJqAx7eeDXHa'

export const getGameList = async (type) => {
    let signature = md5(merchantId + type + secretKey)
    try {
        const res = await httpRequest.post({
            method: "GetGameList",
            agentId: merchantId,
            signature,
            syslang: 1,
            device: 1,
            data: { game_type: type }
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'Access-Control-Allow-Origin': '*'
            }
        })
        if (res.status === 0) {
            return res
        } else {
            toast.error(res.msg)
        }
    } catch (error) {
        toast.error(getError(error))
        return false
    }
};

export const getSubGameList = async (provider, type) => {
    let signature = md5(merchantId + type + secretKey)
    /* console.log('provider :',provider)
    console.log('type :', type)
    console.log(merchantId, type, secretKey)
    console.log('signature :', signature) */
    try {
        const res = await httpRequest.post({
            method: "GetSubGameList",
            agentId: merchantId,
            signature,
            syslang: 1,
            device: 1,
            data: { provider, game_type: type }
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'Access-Control-Allow-Origin': '*'
            }
        })
        //console.log(res)
        if (res.status === 0) {
            return res
        } else {
            toast.error(res.msg)
        }
    } catch (error) {
        toast.error(getError(error))
        return false
    }
}

export const loginGame = async (username, provider, type, code) => {
    let signature = md5(merchantId + username + secretKey)
    try {
        const res = await httpRequest.post({
            method: "LoginGame",
            agentId: merchantId,
            signature,
            syslang: 1,
            device: 1,
            data: { username, provider, game_type: type, game_code: code }
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'Access-Control-Allow-Origin': '*'
            }
        })
        if (res.status === 0) {
            return res
        } else {
            toast.error(res.msg)
        }
    } catch (error) {
        toast.error(getError(error))
        return false
    }
}