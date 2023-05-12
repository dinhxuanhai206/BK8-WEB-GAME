import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./ReferProgram.module.scss";
import { Link } from "react-scroll";
import images from "~/constants/imagePromosMobile";
import Collab from "~/components/Collab/Collab";

const cx = classNames.bind(styles);
const dataMenu = [
    {
        img: images.SPORT,
        name: "Thể Thao",
    },
    {
        img: images.CASINO,
        name: "Đánh Bài",
    },
    {
        img: images.SLOTS,
        name: "Slots",
    },
    {
        img: images.FISHING,
        name: "Bắn Cá",
    },
    {
        img: images.POKER,
        name: "Poker",
    },
    {
        img: images.LOTTERY,
        name: "Xổ Số",
    },
];

function ReferProgram() {
    const [active, setActive] = useState("");
    const handleChange = (event) => {
        setActive(event.target.id);
    };
    const [isShow, setIsShow] = useState(false);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("menu")}>
                <Link to="rfcode" spy={true} smooth={true}>
                    <div
                        key={1}
                        className={cx(
                            "btn-nav",
                            active === "1" ? "active" : ""
                        )}
                        id={"1"}
                        onClick={handleChange}
                    >
                        GIỚI THIỆU
                    </div>
                </Link>

                <Link to="rewards" spy={true} smooth={true}>
                    <div
                        key={2}
                        className={cx(
                            "btn-nav",
                            active === "2" ? "active" : ""
                        )}
                        id={"2"}
                        onClick={handleChange}
                    >
                        PHẦN THƯỞNG
                    </div>
                </Link>

                <Link to="rftour" spy={true} smooth={true}>
                    <div
                        key={3}
                        className={cx(
                            "btn-nav",
                            active === "3" ? "active" : ""
                        )}
                        id={"3"}
                        onClick={handleChange}
                    >
                        GIẢI ĐẤU
                    </div>
                </Link>

                <Link to="faq" spy={true} smooth={true}>
                    <div
                        key={4}
                        className={cx(
                            "btn-nav",
                            active === "4" ? "active" : ""
                        )}
                        id={"4"}
                        onClick={handleChange}
                    >
                        CÂU HỎI
                    </div>
                </Link>
            </div>
            <div className={cx("content")}>
                <img src={images.bnRefer1} alt="" className={cx("img")} />
                <div className={cx("title")}>
                    BK<span>8</span> GIỚI THIỆU CHƯƠNG TRÌNH
                </div>
                <p className={cx("p1")}>
                    Chương trình giới thiệu BK8 được thiết kế để thúc đẩy các
                    mời bạn bè và gia đình tham gia BK8.
                </p>
                <p className={cx("p2")}>
                    Chúng tôi đã xây dựng chương trình giới thiệu này để làm cho
                    nó nhanh chóng, đơn giản và bổ ích khi các thành viên giới
                    thiệu ai đó. Ngoài ra đến những phần thưởng tiền mặt vô cùng
                    phấn khích, những ưu đãi khác bao gồm quà tặng đặc biệt và
                    điểm thưởng. Có cái gì đó cho cả người giới thiệu và trọng
                    tài – Đó thực sự là một đôi bên cùng có lợi!
                </p>
            </div>
            <div className={cx("content")} id="rfcode">
                <img src={images.bnRefer2} alt="" className={cx("img")} />
                <div className={cx("title1")}>Giới thiệu dễ dàng như ABC</div>
                <p className={cx("p1")}>
                    Mỗi thành viên BK8 đang hoạt động có một mã giới thiệu và
                    URL duy nhất được tạo tự động bởi hệ thống của chúng tôi.
                    Chỉ cần chia sẻ mã hoặc URL với các bên quan tâm và bạn có
                    thể bắt đầu thu thập phần thưởng của bạn.
                </p>
                <p className={cx("p2")}>
                    Ngay lập tức, sau khi người bạn giới thiệu được xác minh với
                    tư cách là thành viên mới của BK8, anh ấy / cô ấy sẽ nhận
                    được một số miễn phí cược và bạn sẽ bắt đầu thu thập phần
                    thưởng của mình.
                </p>
            </div>
            <div className={cx("content")} id="rewards">
                <img src={images.bnRefer3} alt="" className={cx("img")} />
                <div className={cx("title1")}>
                    Phần thưởng cho việc giới thiệu
                </div>
                <p className={cx("p1")}>
                    BK8 đưa ra phần thưởng cho việc giới thiệu dưới các hình
                    thức khác nhau và phần thưởng của bạn đang diễn ra. Có nghĩa
                    là, bạn không chỉ được cung cấp một phần thưởng một lần sau
                    khi giới thiệu thành công ai đó tham gia BK8, nhưng thay vào
                    đó, bạn sẽ tiếp tục thu thập phần thưởng tùy thuộc vào mức
                    độ tích cực của trọng tài của bạn.
                </p>
                <p className={cx("p2")}>
                    Chẳng hạn, mỗi khi trọng tài của bạn đạt được mục tiêu tiền
                    gửi hoặc đạt được một số doanh thu, bạn sẽ nhận được một số
                    phần thưởng. Phần thưởng có thể đến dưới dạng giải thưởng
                    quà tặng, đặt cược tín dụng cũng như điểm. Tóm lại, bạn càng
                    có nhiều trọng tài chơi càng nhiều bạn sẽ nhận được.
                </p>
                <p className={cx("p2")}>
                    Vì vậy, thỉnh thoảng hãy kiểm tra với các trọng tài của bạn
                    để xem cách họ đang làm vì nó sẽ ảnh hưởng trực tiếp đến bạn
                    phần thưởng!
                </p>
            </div>
            <div className={cx("content")} id="rftour">
                <img src={images.bnRefer4} alt="" className={cx("img")} />
                <div className={cx("title1")}>Giải đấu giới thiệu</div>
                <p className={cx("p1")}>
                    Đối với những người luôn thích thử thách, Giới thiệu BK8
                    Chương trình đang giới thiệu một giải đấu giới thiệu. Trong
                    thời gian này giải đấu, bạn giới thiệu càng nhiều người, bạn
                    càng lớn phần thưởng. Hãy tích cực, đừng bỏ lỡ cơ hội này để
                    giành chiến thắng lớn giải thưởng!
                </p>
                <div className={cx("logo-block")}>
                    {dataMenu.map((item, index) => (
                        <div className={cx("item")} key={index}>
                            <img src={item.img} className={cx("logo")} />
                            <p className={cx("name")}>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx("content")} id="faq">
                <div className={cx("title1")}>FAQ</div>
                <Collab title="Làm thế nào tôi có thể giới thiệu ai đó?">
                    <p>
                        1. Chia sẻ mã giới thiệu hoặc URL duy nhất của bạn với
                        người mà bạn muốn giới thiệu.
                    </p>
                </Collab>
                <Collab title="Khi nào tôi sẽ bắt đầu nhận phần thưởng của mình?">
                    <p>
                        Sau khi xác minh người mà bạn đã giới thiệu. Phần thưởng
                        dựa trên các hoạt động của trọng tài của bạn trên BK8
                        trang mạng.
                    </p>
                </Collab>
                <Collab title="Tôi có thể làm gì với Điểm thưởng của mình?">
                    <p>
					Điểm Thưởng có thể dùng để đổi quà. điểm của bạn
                         được dựa trên số lượng doanh thu của trọng tài của bạn và của bạn
                         hạng thành viên.
                    </p>
                </Collab>
            </div>
            <div className={cx("share")}>
                <div className={cx("block")}>
                    {" "}
                    <p className={cx("title-share")}>REFER</p>
                    <p className={cx("title-share")}>YOUR FRIEND NOW.</p>
                    <p className={cx("text-share")}>
                        Share the referral code with your friend.
                    </p>
                </div>
                <div className={cx("btn-block")}>
                    <button className={cx("btn-w")}></button>
                    <button className={cx("btn-share")}>SHARE</button>
                </div>
            </div>
        </div>
    );
}

export default ReferProgram;
