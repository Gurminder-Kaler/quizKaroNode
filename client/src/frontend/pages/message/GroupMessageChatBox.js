// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Moment from "react-moment";

// // import { getMessagesBetweenTwoUsers } from "../../../actions/chatActions";
// function GroupMessageChatBox(props) {
//   // const dispatch = useDispatch();
//   const userState = useSelector((state) => state.auth.user);
//   console.log("props", props);
//   let {
//     messages,
//     oldMessages,
//     group,
//     setMessage,
//     sendMessage,
//     message,
//     scrollRef,
//   } = props;
//   console.log("props", props);
//   useEffect(() => {
//     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div>
//       <h5 className="mesgs">
//         <div className="incoming_msg_img">
//           <img
//             src="https://ptetutorials.com/images/user-profile.png"
//             alt="sunil"
//           />
//         </div>{" "}
//         {group !== undefined && group.name}
//       </h5>
//       <div className="mesgs">
//         <div className="msg_history">
//           {group !== undefined && messages && messages.length > 0
//             ? messages.map((msg, index) =>
//                 msg.createdBy._id !== userState._id ? (
//                   <div key={index} ref={scrollRef} className="incoming_msg">
//                     {msg.createdBy && msg.createdBy.userName}
//                     <div className="received_msg">
//                       <div className="received_withd_msg">
//                         <p>{msg.message}</p>
//                         <span className="time_date">
//                           <Moment>{msg.createdAt}</Moment>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div key={index} ref={scrollRef} className="outgoing_msg">
//                     {"You"}
//                     <div className="sent_msg">
//                       <p>{msg.message}</p>
//                       <span className="time_date">
//                         <Moment>{msg.createdAt}1</Moment>
//                       </span>
//                     </div>
//                   </div>
//                 )
//               )
//             : "Start Conversation"}
//         </div>
//         <div className="type_msg">
//           <div className="input_msg_write">
//             <input
//               type="text"
//               className="write_msg"
//               placeholder="Type a message"
//               name="message"
//               value={message}
//               onChange={({ target: { value } }) => setMessage(value)}
//               onKeyPress={(event) =>
//                 event.key === "Enter" ? sendMessage(event) : null
//               }
//             />
//             <button
//               className="msg_send_btn"
//               type="button"
//               onClick={sendMessage}
//             >
//               <i className="fa fa-paper-plane" aria-hidden="true"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GroupMessageChatBox;
