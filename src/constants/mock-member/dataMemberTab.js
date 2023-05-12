import * as images from '../tabMember'
export const bankingTab = [
  { title: "Deposit", link: "deposit", img: images.DEPOSIT, imgActive: images.DEPOSITACTIVE },
  { title: "Transfer | Promo", link: "transfer", img: images.TRANSFER, imgActive: images.TRANSFERACTIVE },
  { title: "Withdraw", link: "withdraw", img: images.WITHDRAW, imgActive: images.WITHDRAWACTIVE},
  { title: "History", link: "history", img: images.HISTORY, imgActive: images.HISTORYACTIVE},
];

export const myAccount = [
  { title: "Messaging", link: "inbox",img: images.MESSAGES, imgActive: images.MESSAGESACTIVE },
  { title: "My Profile", link: "profile",img: images.MYPROFILE, imgActive: images.MYPROFILEACTIVE },
  { title: "Change Password", link: "change-password",img: images.PASSWORD, imgActive: images.PASSWORDACTIVE },
  { title: "Withdrawal Details", link: "bank",img: images.DETAILS, imgActive: images.DETAILSACTIVE },
  { title: "Referral", link: "referral",img: images.REFERRAL, imgActive: images.REFERALACTIVE },
];
