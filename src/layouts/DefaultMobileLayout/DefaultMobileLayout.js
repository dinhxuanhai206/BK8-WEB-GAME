import classNames from "classnames/bind";
import styles from "./DefaultMobileLayout.module.scss";
import Footer from "../components/Footer/Footer";
import ChatOnline from '../components/ChatOnline/ChatOnline'
import SidebarMobile from "../components/SidebarMobile/SidebarMobile";
import { useState } from "react";
import HeaderMobile from "~/layouts/components/HeaderMobile/HeaderMobile";
import UserInfoMobile from "../components/UserInfoMobile/UserInfoMobile";

const cx = classNames.bind(styles);

function DefaultMobileLayout({ children }) {
    const [isShow, setIsShow] = useState(false)
    return (
        <div>
            <div className={cx('wrapper')}>
                <HeaderMobile {...{isShow, setIsShow}}/>
                <SidebarMobile {...{isShow, setIsShow}}/>
                <div className={cx('container-wrapper')}>
                    <div className={cx('content')}>{children}</div>
                </div>
                <ChatOnline />
                <UserInfoMobile/>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultMobileLayout;
