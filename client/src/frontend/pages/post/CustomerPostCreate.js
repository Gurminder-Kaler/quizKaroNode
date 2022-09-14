// // import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, Link } from "react-router-dom";
// import { addPost } from "../../../actions/postActions";
// import TextAreaFieldGroup from "../../../common/TextAreaFieldGroup";

// import FrontEndLayout from "../../layouts/FrontEndLayout";
// const CustomerPostCreate = () => {
//   const authUser = useSelector((state) => state.auth.user);
//   const [selectedFile, setSelectedFile] = useState([]);
//   const [post, setPost] = useState("");
//   const [isFilePicked, setIsFilePicked] = useState(false);
//   const changeHandler = (event) => {
    
//     let array = [];
//     if (event.target.name === "post") {
//       setPost(event.target.value); 
//     } else {
//       event.target.files[0] && setIsFilePicked(true);
//       for (let i = 0; i < event.target.files.length; i++) {
//         array.push(event.target.files[i]);
//       }
//       setSelectedFile(array);
//     }
//   };

//   const dispatch = useDispatch();
//   let history = useHistory();
//   const handleSubmission = () => {
//     // HANDLING FILE AS SENDING FILE INTO BACKEND
//     // if (!isFilePicked) return; 
//     const formData = new FormData();
//     formData.append("photos", selectedFile);
//     // ALSO ADD RANDOM VALUE IF YOU WANT LIKE STRING , OBJECT OR      ARRAY
//     formData.append("post", post);
//     formData.append("userId", authUser._id);
//     // API CALL
//     dispatch(addPost(formData, history));
//   };
//   return (
//     <FrontEndLayout>
//       <div className="content-wrapper">
//         <div className="content-header">
//           <div className="container-fluid">
//             <div className="row mb-2">
//               <div className="col-sm-6">
//                 <h1 className="m-0 text-dark">Your Posts</h1>
//               </div>
//               <div className="col-sm-6">
//                 <ol className="breadcrumb float-sm-right">
//                   <li className="breadcrumb-item">
//                     <Link to={"/customer/dashboard"}>Home</Link>
//                   </li>
//                   <li className="breadcrumb-item active">Dashboard</li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div>
//         <section className="content">
//           <div className="container-fluid">
//             <div className="form-group">
//               <label htmlFor="post">Enter post here</label>
//               <TextAreaFieldGroup
//                 type="text"
//                 className="form-control"
//                 id="post"
//                 name="post"
//                 value={post}
//                 onChange={changeHandler}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="photos">Photos</label>
//               <input
//                 type="file"
//                 multiple
//                 className="form-control"
//                 id="photos"
//                 name="photos"
//                 onChange={changeHandler}
//               />
//             </div>
//             <button
//               type="button"
//               onClick={handleSubmission}
//               className="btn btn-sm btn-success"
//             >
//               Add
//             </button>
//           </div>
//         </section>
//       </div>
//     </FrontEndLayout>
//   );
// };
// export default CustomerPostCreate;
