import classNames from "classnames/bind";
import styles from "./HeaderOnlyMobileLayout.module.scss";
import ChatOnline from '../components/ChatOnline/ChatOnline'
import SidebarMobile from "../components/SidebarMobile/SidebarMobile";
import { useState } from "react";
import HeaderMobile from "~/layouts/components/HeaderMobile/HeaderMobile";
import UserInfoMobile from "../components/UserInfoMobile/UserInfoMobile";

const cx = classNames.bind(styles);

function HeaderOnlyMobileLayout({title, children }) {
    const [isShow, setIsShow] = useState(false)
    return (
        <div>
            <div className={cx('wrapper')}>
                <HeaderMobile {...{title, isShow, setIsShow}}/>
                <SidebarMobile {...{isShow, setIsShow}}/>
                <div className={cx('container-wrapper')}>
                    <div className={cx('content')}>{children}</div>
                </div>
                <ChatOnline />
                <UserInfoMobile/>
            </div>
        </div>
    );
}

export default HeaderOnlyMobileLayout;
