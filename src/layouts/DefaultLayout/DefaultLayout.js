import Header from "~/layouts/components/Header/Header";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import Navbar from '../components/Navbar/Navbar'
import ChatOnline from '../components/ChatOnline/ChatOnline'


const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header />
                <Navbar />
                <Sidebar />
                <div className={cx('container-wrapper')}>
                    <div className={cx('content')}>{children}</div>
                </div>
                <ChatOnline />
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
