import React from "react";
import classNames from "classnames/bind";
import styles from "./Story.module.scss";
import images from "~/constants/imagePromosMobile";
const dataStory =[
  {
    img: images.bk8,
    year: "2015",
    title: "Proudly announce the launch of BK8 Sports Provider",
    content: "BK8 Sports boasts a selection of over 90 sports categories with thousands of live sports matches available to bet on daily. Punters are able to mix and match different sports types on BK8-Sports’s unique mix parlay bets, giving players the maximum amount of flexibility to bet exactly the way they want without compromises.",
  },
  {
    img: images.evolution,
    year: "2016",
    title: "Collaboration with the pioneering online live casino, Evolution Gaming",
    content: "BK8's collaboration with EVO offers an unrivalled portfolio with time-honoured and unique live casino games that meet the needs of multiple international markets, and are both equally innovative and entertaining for all BK8 members.",
  },
  {
    img: images.esportlogo,
    year: "2017",
    title: "E-Sports popularity on the rise. BK8's new E-Sports partner, IM E-Sports",
    content: "E-sports has been on the rise for years, its popularity and player base has been increasing ever since entering the public domain. IM E-Sport is the #1 E-Sportsbook provider in Asia with a great selection of the most popular multiplayer games.",
  },
  {
    img: images.DBR,
    year: "2018",
    title: "Official DBR Partner of Spanish League 2018/19 and John Terry as first brand ambassador",
    content: "As the league’s Asian betting partner, BK8 brand proudly displayed on digital billboards during away La Liga matches around Real Madrid and Barcelona FC in 2018 to capture the attention of users from all around the globe. In the same year, BK8 announces John Terry as the first brand ambassador. As captain of both England and Chelsea team, he has won the most prestigious trophies including, the English Champion, the English FA cup winner, the Europa league winner and the Champions league winner.",
  },
  {
    img: images.Robin,
    year: "2019",
    title: "BK8 proudly announce Robin Van Persie as brand ambassador",
    content: "BK8 is thrilled to have international football icon, Robin Van Persie as the brand ambassador. He will help to accelerate the process in achieving the goals set forth by providing members the chance to get up close and personal with a sports icon. Robin Van Persie is Netherlands national team all-time top goalscorer and won consecutively 2 years Premier League Golden Boot: 2011-12, 2012-13 and well as PFA & FWA Footballer of the Year: 2011-12",
  },
  {
    img: images.bitcoin,
    year: "2020",
    title: "The era of Cryptocurrency and the launch of the exciting Leaderboard program",
    content: "BK8 enables cryptocurrency as a payment method, offering players better transaction security, uninterrupted process and complete privacy. In the same year, the highly anticipated Leaderboard was launched in Malaysia, Singapore, Indonesia and Thailand offering a total prize pool of up to USD1,000,000!",
  },
  {
    img: images.soccer,
    year: "2021",
    title: "Proudly announce we are the Official Asian Betting Partner of Villarreal CF, Athletic Club, Valencia CF, Elche CF and RCD Mallorca in the Spanish League 2021/22",
    content: "BK8 is thrilled to be the Official Asian Betting Partner for not 1 but 5 Spanish teams until the end of the 2021/22 season. This new partnership will engage more fans through exclusive content, where both parties will continue to gain popularity throughout Asia while letting BK8 members get closer to the action.",
  },
]

const cx = classNames.bind(styles);

function Story() {
  return (
    <div className={cx("wrapper")}>
       <div className={cx("title")}>The BK8 Story</div>
       <div className={cx("content")}>
          {dataStory.map((item, index)=>(
            <div key={index} className={cx("block")}>
                <div className={cx("block-top")}>
                      <div className={cx("img-select")}>
                        <img src={item.img} alt="" className={cx("logo")}/>
                      </div>
                      <div className={cx("left")}>
                          <p className={cx("year")}>{item.year}</p>
                          <p className={cx("title-content")}>{item.title}</p>
                      </div>
                </div>
                <div className={cx("block-bottom")}>
                  {item.content}
                </div>
            </div>
          ))}
       </div>
      
    </div>
  );
}

export default Story;
