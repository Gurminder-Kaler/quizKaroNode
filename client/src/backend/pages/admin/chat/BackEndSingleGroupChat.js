// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import { getAGroupViaGroupId } from "../../../../actions/chatActions";
// import BackEndLayout from "../../../layouts/BackEndLayout";
// // import queryString from 'query-string'
// import io from "socket.io-client";

// function BackEndSingleGroupChat() {
//   const dispatch = useDispatch();

//   const initialState = {
//     messages: [],
//   };
//   let groupId = useParams("groupId");
//   useEffect(() => {
//     dispatch(getAGroupViaGroupId(groupId));
//   }, []);

//   const messages = useSelector((state) => state.chat.messages);
//   const group = useSelector((state) => state.chat.group);
//   console.log("messages", messages);
//   const [groupState, setgroupState] = useState(initialState);

//   useEffect(() => {
//     if (group) {
//       setgroupState({ messages });
//     }
//   }, [group]);
//   let classes = "chat_list active_chat alert-danger";
//   let classs = "chat_list active_chat alert-success";
//   return (
//     <BackEndLayout>
//       <div className="content-wrapper">
//         <div className="content-header">
//           <div className="container-fluid">
//             <div className="row mb-2">
//               <div className="col-sm-6">
//                 <h1 className="m-0 text-dark">All Groups</h1>
//               </div>
//               <div className="col-sm-6">
//                 <ol className="breadcrumb float-sm-right">
//                   <li className="breadcrumb-item">
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li className="breadcrumb-item active">
//                     <Link to="/admin/chat/groups">View All Groups</Link>
//                   </li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div>

//         <section className="content">
//           <div className="container-fluid">
//             <div className="col-12">
//               <h2 className="">Group Name : {group && group.name}</h2>
//               <div className="mesgs">
//                 <div className="msg_history">
//                   {messages &&
//                     messages.length > 0 &&
//                     messages.map((chat, index) => (
//                       <div className={index % 2 == 0 ? classs : classes}>
//                         <div className="chat_people">
//                           <div className="chat_ib">
//                             <h5>
//                               {chat.createdBy && chat.createdBy.userName}
//                               <span className="chat_date">
//                                 {chat.createdAt}
//                               </span>
//                             </h5>
//                             <p>{chat.message}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </BackEndLayout>
//   );
// }

// export default BackEndSingleGroupChat;
