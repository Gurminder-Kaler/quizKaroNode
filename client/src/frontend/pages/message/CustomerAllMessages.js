// import React, { useEffect, useRef } from "react";
// // import { useDispatch, useSelector } from 'react-redux'
// // import { Link } from 'react-router-dom'
// import FrontEndLayout from "./../../layouts/FrontEndLayout";
// import MessageSideBar from "./MessageSideBar";
// import MessageChatBox from "./FriendMessageChatBox";
// import { io } from "socket.io-client";
// import { SOCKET_URL } from "../../../common/Constant.js";
// import "./message.css";
// function CustomerAllMessages() {
//   // const [socket, setSocket] = useState(null)
//   const socket = useRef();
//   useEffect(() => {
//     socket.current = io(SOCKET_URL);
//     socket.current.on("welcome", (data) => {
//       console.log("Welcome User.");
//     });
//   }, []);
//   return (
//     <FrontEndLayout>
//       <div className="container-fluid">
//         <div className="messaging">
//           <div className="inbox_msg">
//             <div className="inbox_people">
//               <div className="headind_srch">
//                 <div className="recent_heading">
//                   <h4>Recent1</h4>
//                 </div>
//                 <div className="srch_bar">
//                   <div className="stylish-input-group">
//                     <input
//                       type="text"
//                       className="search-bar"
//                       placeholder="Search"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <MessageSideBar />
//             </div>
//             <MessageChatBox />
//           </div>
//         </div>
//       </div>
//     </FrontEndLayout>
//   );
// }

// export default CustomerAllMessages;
