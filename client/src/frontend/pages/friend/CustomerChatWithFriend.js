// import React, { useEffect, useState, useRef } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import FrontEndLayout from '../../layouts/FrontEndLayout'
// import FriendMessageChatBox from '../message/FriendMessageChatBox'
// import {
//   getMessagesBetweenTwoUsers,
//   getGroupsViaUserId
// } from '../../../actions/chatActions'
// import '../message/message.css'
// import { io } from 'socket.io-client'
// import { SOCKET_URL, API_URL } from '../../../common/Constant'
// import { getAllFriends } from '../../../actions/friendActions'

// function CustomerChatWithFriend () {
//   const userState = useSelector(state => state.auth.user)

//   const dispatch = useDispatch()

//   let userOneId = userState._id
//   let socket = useRef()
//   let scrollRef = useRef()
//   let { userId } = useParams('userId')
//   let userTwoId = userId
//   let [currentUserTwo, setCurrentUserTwo] = useState(userTwoId)
//   useEffect(() => {
//     setCurrentUserTwo(userTwoId)
//     dispatch(
//       getMessagesBetweenTwoUsers({
//         userOne: userOneId,
//         userTwo: currentUserTwo
//       })
//     )
//   }, [])
//   useEffect(() => {
//     dispatch(getAllFriends(userState._id))
//     dispatch(getGroupsViaUserId(userState._id))
//   }, [])

//   const [message, setMessage] = useState('')
//   const [arrivalMessage, setArrivalMessage] = useState(null)
//   const [onlineUsers, setOnlineUsers] = useState(null)
//   const friends = useSelector(state => state.friend.friends)
//   const groups = useSelector(state => state.chat.groups)
//   const oldMessages = useSelector(state => state.chat.messages) // from db old m,essages
//   console.log('currentUserTwo', currentUserTwo)
//   useEffect(() => {
//     socket.current = io(SOCKET_URL)
//     socket.current.on('getMessage', data => {
//       console.log('getMessage', data)
//       setArrivalMessage(data)
//     })
//     if (oldMessages && oldMessages.length > 0) {
//       dispatch(
//         getMessagesBetweenTwoUsers({
//           userOne: userOneId,
//           userTwo: currentUserTwo
//         })
//       )
//     }

//     console.log('UPPER COMPONENT DID MOUNT currentUserTwo', currentUserTwo)
//   }, []) // correct

//   const [messages, setMessages] = useState(oldMessages)
//   let userArray = [userOneId, userTwoId]
//   useEffect(() => {
//     arrivalMessage &&
//       arrivalMessage.message &&
//       userArray.indexOf(arrivalMessage.createdBy) > -1 &&
//       setMessages(state => state && [...state, arrivalMessage])
//     console.log('arrivalMessage', arrivalMessage)
//     setMessage('')

//     // socket.current.emit("addUser", userTwoId, "i think mandy");
//   }, [arrivalMessage, currentUserTwo])
//   useEffect(() => {
//     dispatch(
//       getMessagesBetweenTwoUsers({
//         userOne: userOneId,
//         userTwo: currentUserTwo
//       })
//     )

//     console.log('////////// currentUserTwo', currentUserTwo)
//     let send = {
//       userOne: userOneId,
//       userTwo: currentUserTwo,
//       deletedType: 'for_me'
//     }
//     axios
//       .post(API_URL + '/chat/getMessagesBetweenTwoUsers', send)
//       .then(result => {
//         setMessages(result.data.chat)
//       })
//       .catch(err => console.log('err', err))
//   }, [currentUserTwo])

//   useEffect(() => {
//     dispatch(
//       getMessagesBetweenTwoUsers({
//         userOne: userOneId,
//         userTwo: currentUserTwo
//       })
//     )
//   }, [arrivalMessage])

//   useEffect(() => {
//     dispatch(
//       getMessagesBetweenTwoUsers({
//         userOne: userOneId,
//         userTwo: currentUserTwo
//       })
//     )
//   }, [userState._id])

//   useEffect(() => {
//     //sending to node
//     socket.current.emit('addUser', userOneId, userState.firstName)
//     //taking from node -setting online users
//     socket.current.on('getUsers', users => {
//       setOnlineUsers(users.filter(f => users.some(u => u.userId === f)))
//     })

//     console.log('Lower COMPONENT DID MOUNT')
//   }, [])

//   // const state = useSelector(state =>
//   const sendMessage = async event => {
//     event.preventDefault()
//     if (message) {
//       let send = {
//         message: message,
//         senderId: userOneId,
//         receiverId: userTwoId,
//         type: 'one_to_one',
//         socket: socket.current.id
//       }

//       socket.current.emit('sendMessage', send)
//     }
//   }

//   // const { auth } = useSelector(state => state.auth)
//   let { userOne, userTwo } = useSelector(state => state.chat)

//   return (
//     <FrontEndLayout>
//       <div className='container-wrapper'>
//         <div className='container-fluid'>
//           <div className='messaging'>
//             <div className='inbox_msg'>
//               <div className='inbox_people'>
//                 <div className='headind_srch'>
//                   <div className='recent_heading'>
//                     <h4>Recent</h4>
//                   </div>
//                   <div className='srch_bar'>
//                     <div className='stylish-input-group'>
//                       <input
//                         type='text'
//                         className='search-bar'
//                         placeholder='Search'
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className='inbox_chat scroll'>
//                   {friends &&
//                     friends.length > 0 &&
//                     friends.map((fri, index) => (
//                       <Link
//                         to={`/customer/friend/chat/${fri._id}`}
//                         onClick={() => setCurrentUserTwo(fri._id)}
//                         key={index}
//                       >
//                         <div
//                           className={`chat_list ${fri._id === userTwoId &&
//                             'active_chat'}`}
//                         >
//                           <div className='chat_people'>
//                             <div className='chat_img'>
//                               <img
//                                 src='https://ptetutorials.com/images/user-profile.png'
//                                 alt='sunil'
//                               />
//                             </div>
//                             <div className='chat_ib'>
//                               <h5>{fri.userName}</h5>
//                             </div>
//                           </div>
//                         </div>
//                       </Link>
//                     ))}
//                   {groups &&
//                     groups.length > 0 &&
//                     groups.map(gro => (
//                       <Link
//                         to={`/customer/group/chat/${gro._id}`}
//                         onClick={() => setCurrentUserTwo(gro._id)}
//                       >
//                         <div
//                           className={`chat_list ${gro._id === userTwoId &&
//                             'active_chat'}`}
//                         >
//                           <div className='chat_people'>
//                             <div className='chat_img'>
//                               <img
//                                 src='https://ptetutorials.com/images/user-profile.png'
//                                 alt='sunil'
//                               />
//                             </div>
//                             <div className='chat_ib'>
//                               <h5>{gro.name}</h5>
//                             </div>
//                           </div>
//                         </div>
//                       </Link>
//                     ))}
//                 </div>
//               </div>
//               <FriendMessageChatBox
//                 messages={messages}
//                 message={message}
//                 oldMessages={oldMessages}
//                 setMessage={setMessage}
//                 setMessages={setMessages}
//                 sendMessage={sendMessage}
//                 userOne={userOne}
//                 userTwo={userTwo}
//                 scrollRef={scrollRef}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </FrontEndLayout>
//   )
// }

// export default CustomerChatWithFriend
