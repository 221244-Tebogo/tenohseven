// Sidebar imports
// this file contains reusable functions, it links to Sidebar. 
import {
    UilEstate,
    UilClipboardAlt,
    //UilUsersAlt,
    UilPackage,
    UilChart,
   // UilSignOutAlt,
  } from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  //import { keyboard } from "@testing-library/user-event/dist/keyboard";
  
  // Recent Card Imports
  //import img1 from "../imgs/img1.png";
  //import img2 from "../imgs/img2.png";
  //import img3 from "../imgs/img3.png";
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Landing",
    },
    {
      icon: UilPackage,
      heading: 'Compare'
    },
    {
      icon: UilChart,
      heading: 'Analytics'
    },
  ];
  
  // This is an array that exports cards data to display on the main App.js (dashboard) Analytics Cards Data
  export const cardsData = [
    {
      //Javascript Object, below value are Sales, Revenue and Expenses data
      title: "Sales",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Expenses",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  
  // Recent Update Card Data
  export const UpdatesData = [
    {
      //img: img1,
      name: "Michelle",
      noti: "has ordered Digital Card design & Thank you cards.",
      time: "25 seconds ago",
    },
    {
      //img: img2,
      name: "Kopano",
      noti: "has received Perspex song plaque.",
      time: "30 minutes ago",
    },
    {
      //img: img3,
      name: "David",
      noti: "has ordered Picnic Basket with flowers.",
      time: "2 hours ago",
    },
  ];

  export default cardsData;