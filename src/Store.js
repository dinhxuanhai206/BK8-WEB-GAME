import { createContext, useReducer } from 'react'

export const Store = createContext();

const initialState = {
    userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    i18nLang: localStorage.getItem('i18nextLng')
        ? localStorage.getItem('i18nextLng')
        : null,
    device: 1,
    sysLang: 1,
    registerData: {},
}

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_I18NEXT_LANG':
            return { ...state, i18nLang: action.payload }
        case 'UPDATE_REG_DATA':
            return { ...state, registerData: action.payload }
        case 'REMOVE_REG_DATA':
            return { ...state, registerData: {} }
        case 'CHANGE_SYS_LANG':
            return { ...state, sysLang: action.payload }
        case 'CHANGE_DEVICE':
            return { ...state, device: action.payload }
        case 'RENDER_TAB_INBOX':
            return { ...state, renderTabInbox: action.payload }
        case 'USER_CURRENCY':
            return { ...state, userInfo: { ...state.userInfo, currency: action.payload } }
        case 'USER_SIGNIN':
            return { ...state, userInfo: action.payload }
        case 'USER_SIGNOUT':
            return { ...state, userInfo: null }
        default:
            return state
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }
    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    )
}
