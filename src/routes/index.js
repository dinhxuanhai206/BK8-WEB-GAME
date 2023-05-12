import Home from "~/pages/Home/Home";
import Sports from "~/pages/Sports/Sports";
import ESports from "~/pages/ESports/ESports";
import Casino from "~/pages/Casino/Casino";
import config from "~/config";
import Promos from "~/pages/Promos/Promos";
import Vip from "~/pages/Vip/Vip";
import Slots from "~/pages/Slots/Slots";
import Leaderboard from "~/pages/Leaderboard/Leaderboard";
import Sponsors from "~/pages/Sponsors/Sponsors";
import Register from "~/pages/Register/Register";

import { HeaderOnlyMobileLayout } from "~/layouts";

/* import NextSpin from "../pages/Slots/NextSpin/NextSpin";
import SpadeGaming from "../pages/Slots/SpadeGaming/SpadeGaming";
import Jili from "../pages/Slots/JiLi/JiLi";
import MicroGaming from "~/pages/Slots/MicroGaming/MicroGaming";
import Joker from "~/pages/Slots/Joker/Joker";
import PlayTech from "~/pages/Slots/PlayTech/PlayTech";
import FunkyGames from "~/pages/Slots/FunkyGames/FunkyGames";
import GamePlay from "~/pages/Slots/GamePlay/GamePlay";
import AsiaGaming from "~/pages/Slots/AsiaGaming/AsiaGaming";
import TopTrendGaming from "~/pages/Slots/TopTrendGaming/TopTrendGaming";
import NetEnt from "~/pages/Slots/NetEnt/NetEnt";
import Habanero from "~/pages/Slots/Habanero/Habanero";
import PragmaticPlay from "~/pages/Slots/PragmaticPlay/PragmaticPlay";
import RedTiger from "~/pages/Slots/RedTiger/RedTiger";
import HcSlot from "~/pages/Slots/HcSlot/HcSlot";
import Mega888 from "~/pages/Slots/Mega888/Mega888";
import Kiss918 from "~/pages/Slots/918Kiss/918Kiss";
import PgSoft from "~/pages/Slots/PgSoft/PgSoft";
import PlaynGo from "~/pages/Slots/PlaynGo/PlaynGo";*/
import Lottery from "~/pages/Lottery/Lottery";

import Game3D from "~/pages/Game3D/Game3D";
import Fishing from "~/pages/Fishing/Fishing";
// import GamePlayLottery from "~/pages/Lottery/GamePlay/GamePlay";
// import WinWinLottery from "~/pages/Lottery/WinWinLottery/WinWinLottery";
// import QQKeno from "~/pages/Lottery/QQKeno/QQKeno";

import SpadeGamingFishing from "~/pages/Fishing/SpadeGaming/SpadeGaming";
import MtTech from "~/pages/Fishing/MtTech/MtTech";
import JiliFishing from "~/pages/Fishing/Jili/Jili";

import KingMaker from "~/pages/Game3D/KingMaker/KingMaker";
import V8Poker from "~/pages/Game3D/V8Poker/V8Poker";
import GamePlay3DGame from "~/pages/Game3D/GamePlay/GamePlay";
import MiniTed from "~/pages/Game3D/MiniTed/MiniTed";
import Member from "~/pages/Member/Member";
import Withdraw from "~/pages/Member/Withdraw/Withdraw";
import Transfer from "~/pages/Member/Transfer/Transfer";
import Message from "~/pages/Member/Message/Message";
import MyProfile from "~/pages/Member/MyProfile/MyProfile";
import Details from "~/pages/Member/Details/Details";
import Referral from "~/pages/Member/Referral/Referral";
import Password from "~/pages/Member/Password/Password";
import Deposit from "~/pages/Member/Deposit/Deposit";
import History from "~/pages/Member/History/History";

import ForgotPassword from "~/pages/ForgotPassword/ForgotPassword";
import ReferProgram from "~/pages/ReferProgram/ReferProgram";
import AboutUs from "~/pages/AboutUs/AboutUs";
import Infor from "~/pages/Infor/Infor";
import DownLoadMobile from "~/pages/DownLoadMobile/DownLoadMobile";
import Contact from "~/pages/Contact/Contact";
import Login from "~/pages/Login/Login";
import DepositMobile from "~/pages/DepositMobile/DepositMobile";
import SponsorsMobile from "~/pages/SponsorsMobile/SponsorsMobile";
import PromosMobile from "~/pages/PromosMobile/PromosMobile";
import LeaderBoardMobile from "~/pages/LeaderBoardMobile/LeaderBoardMobile";
import VipMobile from "~/pages/VipMobile/VipMobile";
import TranferMobile from "~/pages/TranferMobile/TranferMobile";
import WithDrawMobile from "~/pages/WithDrawMobile/WithDrawMobile";
import RegisterMobile from "~/pages/RegisterMobile/RegisterMobile";
import HistoryMobile from "~/pages/HistoryMobile/HistoryMobile";
import BankingMobile from "~/pages/BankingMobile/BankingMobile";
import AccountMobile from "~/pages/AccountMobile/AccountMobile";
import memberProfileMobile from "~/pages/memberProfileMobile/memberProfileMobile";
import PasswordMobile from "~/pages/PasswordMobile/PasswordMobile";
import ProviderPasswordMobile from "~/pages/ProviderPasswordMobile/ProviderPasswordMobile";
import MessageMobile from "~/pages/MessageMobile/MessageMobile";
import MessageMobileType from "~/pages/MessageMobile/MessageMobileType/MessageMobileType";
import ReferralMobile from "~/pages/ReferralMobile/ReferralMobile";
import Rebate from "~/pages/RebateMobile/RebateMobile";
import RebateMobile from "~/pages/RebateMobile/RebateMobile";
import ForgetPasswordMobile from "~/pages/ForgotPasswordMobile/ForgotPasswordMobile";
import ForgotPasswordMobile from "~/pages/ForgotPasswordMobile/ForgotPasswordMobile";
import SlotsMobile from "~/pages/SlotsMobile/SlotsMobile";
import FishingMobile from "~/pages/FishingMobile/FishingMobile";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.promos, component: Promos },
  { path: config.routes.vip, component: Vip },
  { path: config.routes.leaderboard, component: Leaderboard },
  { path: config.routes.sports, component: Sports },
  { path: config.routes.esports, component: ESports },
  { path: config.routes.casino, component: Casino },
  { path: config.routes.slots, component: Slots },
  { path: config.routes.fishing, component: Fishing },
  { path: config.routes.lottery, component: Lottery },
  { path: config.routes.sponsors, component: Sponsors },
  //{ path: config.routes.games, component: Game3D },
  { path: config.routes.register, component: Register },
  { path: config.routes.forgotPassword, component: ForgotPassword },

  {
    path: config.routes.referProgram,
    component: ReferProgram,
    layout: HeaderOnlyMobileLayout,
    title: "Referral program",
  },
  {
    path: config.routes.aboutUs,
    component: AboutUs,
    layout: HeaderOnlyMobileLayout,
    title: "About Us",
  },
  {
    path: config.routes.infor,
    component: Infor,
    layout: HeaderOnlyMobileLayout,
  },
  {
    path: config.routes.vipMobile,
    component: VipMobile,
    layout: HeaderOnlyMobileLayout,
    title: "VIP",
  },
  {
    path: config.routes.sponsorship,
    component: SponsorsMobile,
    layout: HeaderOnlyMobileLayout,
    title: "Sponsor",
  },
  {
    path: config.routes.promosMobile,
    component: PromosMobile,
    layout: HeaderOnlyMobileLayout,
  },
  {
    path: config.routes.leaderboardMobile,
    component: LeaderBoardMobile,
    layout: HeaderOnlyMobileLayout,
    title: "LeaderBoard",
  },
  {
    path: config.routes.download,
    component: DownLoadMobile,
    layout: HeaderOnlyMobileLayout,
  },
  {
    path: config.routes.contact,
    component: Contact,
    layout: HeaderOnlyMobileLayout,
    title: "Contact",
  },
  {
    path: config.routes.login,
    component: Login,
    layout: HeaderOnlyMobileLayout,
    title: "Login",
  },
  {
    path: config.routes.mregister,
    component: RegisterMobile,
    layout: HeaderOnlyMobileLayout,
    title: "Register",
  },
  {
    path: config.routes.minstantrebate,
    component: RebateMobile,
    layout: HeaderOnlyMobileLayout,
    title: "instant rebate",
  },
  {
    path: config.routes.reset,
    component: ForgotPasswordMobile,
    layout: HeaderOnlyMobileLayout,
    title: "reset your password",
  },
  {
    path: config.routes.slotsmobile,
    component: SlotsMobile,
    layout: HeaderOnlyMobileLayout,
  },
  {
    path: config.routes.fishingmobile,
    component: FishingMobile,
    layout: HeaderOnlyMobileLayout,
  },
];

const privateRoutes = [
  {
    path: config.routes.memberSettings,
    component: Member,
    children: [
      { path: "deposit", component: Deposit },
      { path: "transfer", component: Transfer },
      { path: "withdraw", component: Withdraw },
      { path: "history", component: History },
      { path: "inbox", component: Message },
      { path: "profile", component: MyProfile },
      { path: "change-password", component: Password },
      { path: "bank", component: Details },
      { path: "referral", component: Referral },
    ],
  },
  {
    path: config.routes.deposit,
    component: DepositMobile,
    layout: HeaderOnlyMobileLayout,
    title: "Deposit",
  },
  {
    path: config.routes.tranfer,
    component: TranferMobile,
    layout: HeaderOnlyMobileLayout,
    title: "Tranfer | Promo",
  },
  {
    path: config.routes.withdraw,
    component: WithDrawMobile,
    layout: HeaderOnlyMobileLayout,
    title: "Withdraw",
  },
  {
    path: config.routes.history,
    component: HistoryMobile,
    layout: HeaderOnlyMobileLayout,
    title: "History",
  },
  {
    path: config.routes.banking,
    component: BankingMobile,
    layout: HeaderOnlyMobileLayout,
    title: "Banking",
  },
  {
    path: config.routes.account,
    component: AccountMobile,
    layout: HeaderOnlyMobileLayout,
    title: "My Account",
  },
  {
    path: config.routes.memberprofile,
    component: memberProfileMobile,
    layout: HeaderOnlyMobileLayout,
    title: "My Profile",
  },
  {
    path: config.routes.passwordmobile,
    component: PasswordMobile,
    layout: HeaderOnlyMobileLayout,
    title: "Change Password",
  },
  {
    path: config.routes.providerpassword,
    component: ProviderPasswordMobile,
    layout: HeaderOnlyMobileLayout,
    title: "Change Game Pass",
  },
  {
    path: config.routes.inbox,
    component: MessageMobile,
    children: [{ path: "inbox-type", component: MessageMobileType }],
    layout: HeaderOnlyMobileLayout,
    title: "Messaging",
  },
  {
    path: config.routes.referral,
    component: ReferralMobile,
    layout: HeaderOnlyMobileLayout,
    title: "Referral",
  },
];

export { publicRoutes, privateRoutes };
