// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import FrontEndLayout from "./../../layouts/FrontEndLayout";
// import {
//   getGroupsViaUserId,
//   getAGroupViaGroupId,
// } from "../../../actions/chatActions";

// import { SOCKET_URL, API_URL } from "../../../common/Constant";
// import MaterialTable from "material-table";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const CustomerAllGroups = (props) => {
//   const oldMessages = useSelector((state) => state.chat.messages);
//   const [messages, setMessages] = useState(oldMessages);
//   const userState = useSelector((state) => state.auth.user);
//   const dispatch = useDispatch();
//   let [currentGroup, setCurrentGroup] = useState();
//   useEffect(() => {
//     dispatch(getGroupsViaUserId(userState._id)); // component DID Mount
//   }, []);
//   useEffect(() => {
//     dispatch(
//       getAGroupViaGroupId({
//         groupId: currentGroup,
//       })
//     );

//     console.log("////////// currentGroup", currentGroup);
//     let send = {
//       groupId: currentGroup,
//     };
//     axios
//       .post(API_URL + "/chat/getAGroupViaGroupId", send)
//       .then((result) => {
//         setMessages(result.data.chat);
//       })
//       .catch((err) => console.log("err", err));
//   }, [currentGroup]);

//   const groups = useSelector((state) => state.chat.groups);
//   const columns = [
//     { title: "Name", field: "name" },
//     // { title: 'Photos', field: 'photos' },
//     {
//       title: "Action",
//       render: (rowData) => (
//         <Link
//           to={`/customer/group/chat/${rowData._id}`}
//           onClick={() => setCurrentGroup(rowData._id)}
//           className="btn btn-sm btn-primary"
//           type="button"
//         >
//           <i className="fa fa-comment"> {` View`}</i>
//         </Link>
//       ),
//     },
//   ];
//   const options = {
//     search: true,
//     paging: true,
//   };
//   const tableTitle = "All your groups' list";

//   return (
//     <FrontEndLayout>
//       <div className="container">
//         <div className="content-header">
//           <div className="row mb-2">
//             <div className="col-sm-6">
//               <h1 className="m-0 text-dark">{tableTitle}</h1>
//             </div>
//             <div className="col-sm-6">
//               <ol className="breadcrumb float-sm-right">
//                 <li className="breadcrumb-item">
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li className="breadcrumb-item active">Dashboard</li>
//               </ol>
//             </div>
//           </div>
//         </div>
//         <section className="content">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12">
//                 <div className="card">
//                   <div className="card-body">
//                     {groups && groups.length > 0 ? (
//                       <MaterialTable
//                         title={tableTitle}
//                         data={groups}
//                         columns={columns}
//                         options={options}
//                       />
//                     ) : (
//                       "You are not associated to any groups"
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </FrontEndLayout>
//   );
// };

// export default CustomerAllGroups;
