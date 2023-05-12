import classNames from "classnames/bind";
import styles from "./HeaderSearchMobileLayout.module.scss";
import ChatOnline from '../components/ChatOnline/ChatOnline'
import Search from "./Search/Search";


const cx = classNames.bind(styles);

function HeaderSearchMobileLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Search />
                <div className={cx('container-wrapper')}>
                    <div className={cx('content')}>{children}</div>
                </div>
                <ChatOnline />
            </div>
        </div>
    );
}

export default HeaderSearchMobileLayout;
