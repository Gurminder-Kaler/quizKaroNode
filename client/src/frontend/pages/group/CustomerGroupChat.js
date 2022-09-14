// import React, { useEffect, useState, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import FrontEndLayout from "../../layouts/FrontEndLayout";
// import GroupMessageChatBox from "../message/GroupMessageChatBox";
// import {
//   getAGroupViaGroupId,
//   getGroupsViaUserId,
// } from "../../../actions/chatActions";
// import "../message/message.css";
// import { io } from "socket.io-client";
// import { SOCKET_URL, API_URL } from "../../../common/Constant";
// // import { getAllFriends } from "../../../actions/friendActions";

// function CustomerGroupChat() {
//   const authUser = useSelector((state) => state.auth.user);

//   const dispatch = useDispatch();

//   let userOneId = authUser._id;
//   let socket = useRef();
//   let scrollRef = useRef();
//   let { groupId } = useParams("groupId");
//   const [currentGroupId, setCurrentGroupId] = useState(groupId);
//   let { group } = useSelector((state) => state.chat);
//   useEffect(() => {
//     dispatch(
//       getAGroupViaGroupId({
//         groupId: groupId,
//       })
//     );
//   }, []);
//   useEffect(() => {
//     // dispatch(getAllFriends(authUser._id));
//     dispatch(getGroupsViaUserId(authUser._id));
//   }, []);

//   const [message, setMessage] = useState("");
//   const [arrivalMessage, setArrivalMessage] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState(null);
//   // const friends = useSelector((state) => state.friend.friends);
//   const groups = useSelector((state) => state.chat.groups);
//   const oldMessages = useSelector((state) => state.chat.messages); // from db old m,essages

//   const [messages, setMessages] = useState(oldMessages);
//   useEffect(() => {
//     socket.current = io(SOCKET_URL);
//     socket.current.on("getGroupMessage", (data) => {
//       console.log("getGroupMessage", data);
//       setArrivalMessage(data);
//     });
//     if (oldMessages && oldMessages.length > 0) {
//       dispatch(
//         getAGroupViaGroupId({
//           groupId: groupId,
//         })
//       );
//     }

//     console.log("UPPER COMPONENT DID MOUNT currentGroupId", currentGroupId);
//   }, []); // correct

//   console.log("oldMessages", oldMessages);
//   useEffect(() => {
//     console.log("arrivalMessage", arrivalMessage);
//     arrivalMessage &&
//       arrivalMessage.message &&
//       // && userArray.indexOf(arrivalMessage.createdBy) > -1 &&
//       setMessages((state) => state && [...state, arrivalMessage]);
//     console.log("message123", messages);
//     setMessage("");

//     // socket.current.emit("addUser", userTwoId, "i think mandy");
//   }, [arrivalMessage]);
//   useEffect(() => {
//     // dispatch(
//     //   getAGroupViaGroupId({
//     //     groupId: currentGroupId,
//     //   })
//     // );

//     console.log("////////// currentGroupId", currentGroupId);
//     let send = {
//       groupId: currentGroupId,
//       deletedType: "for_me",
//     };
//     axios
//       .post(API_URL + "/chat/getAGroupViaGroupId", send)
//       .then((result) => {
//         setMessages(result.data.chat);
//       })
//       .catch((err) => console.log("err", err));
//   }, [arrivalMessage, currentGroupId]);

//   // useEffect(() => {
//   //   dispatch(getAGroupViaGroupId({ groudId: groupId }));
//   // }, [arrivalMessage]);

//   useEffect(() => {
//     dispatch(getAGroupViaGroupId({ groudId: groupId }));
//   }, [authUser._id]);

//   useEffect(() => {
//     //sending to node
//     socket.current.emit("addUser", authUser._id, authUser.firstName);
//     //taking from node -setting online users
//     socket.current.on("getUsers", (users) => {
//       setOnlineUsers(users.filter((f) => users.some((u) => u.userId === f)));
//     });

//     console.log("Lower COMPONENT DID MOUNT");
//   }, []);

//   // const state = useSelector(state =>
//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message) {
//       let send = {
//         message: message,
//         groupId: groupId,
//         senderId: userOneId,
//         type: "many_to_many",
//       };
//       console.log("sende", send);

//       socket.current.emit("sendGroupMessage", send);
//     }
//   };

//   return (
//     <FrontEndLayout>
//       <div className="container-wrapper">
//         <div className="container-fluid">
//           <div className="messaging">
//             <div className="inbox_msg">
//               <div className="inbox_people">
//                 <div className="headind_srch">
//                   <div className="recent_heading">
//                     <h4>Recent</h4>
//                   </div>
//                   <div className="srch_bar">
//                     <div className="stylish-input-group">
//                       <input
//                         type="text"
//                         className="search-bar"
//                         placeholder="Search"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="inbox_chat scroll">
//                   {groups &&
//                     groups.length > 0 &&
//                     groups.map((gro) => (
//                       <Link
//                         to={`/customer/group/chat/${gro._id}`}
//                         onClick={() => setCurrentGroupId(gro._id)}
//                       >
//                         <div
//                           className={`chat_list ${
//                             gro._id === groupId && "active_chat"
//                           }`}
//                         >
//                           <div className="chat_people">
//                             <div className="chat_img">
//                               <img
//                                 src="https://ptetutorials.com/images/user-profile.png"
//                                 alt="sunil"
//                               />
//                             </div>
//                             <div className="chat_ib">
//                               <h5>{gro.name}</h5>
//                             </div>
//                           </div>
//                         </div>
//                       </Link>
//                     ))}
//                 </div>
//               </div>
//               <GroupMessageChatBox
//                 messages={messages}
//                 message={message}
//                 oldMessages={oldMessages}
//                 setMessage={setMessage}
//                 setMessages={setMessages}
//                 sendMessage={sendMessage}
//                 group={group}
//                 scrollRef={scrollRef}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </FrontEndLayout>
//   );
// }

// export default CustomerGroupChat;
