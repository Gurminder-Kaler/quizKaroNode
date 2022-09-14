// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import BackEndLayout from "../../../../layouts/BackEndLayout";
// import {
//   getAllCompanyCategories,
//   addCompanyCategory,
// } from "../../../../../actions/companyActions";
// import MaterialTable from "material-table";

// const BackEndViewAllCompanyCategories = (props) => {
//   const companyAllCategories = useSelector(
//     (state) => state.company.companyAllCategories
//   );

//   const initialState = {
//     category: "",
//     image: "",
//     parent: "",
//     imageIsRequired: true,
//   };

//   const [companyParentCategoryState, setCompanyParentCategoryState] = useState(
//     initialState
//   );

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     if (name === "parent") {
//       if (value === "0") {
//         setCompanyParentCategoryState({
//           ...companyParentCategoryState,
//           imageIsRequired: true,
//         });
//       } else {
//         setCompanyParentCategoryState({
//           ...companyParentCategoryState,
//           parent: value,
//           imageIsRequired: false,
//         });
//       }
//     } else {
//       setCompanyParentCategoryState({
//         ...companyParentCategoryState,
//         [name]: value,
//       });
//     }
//   };

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllCompanyCategories());
//   }, []);

//   const handleFileChange = (event) => {
//     // const { name, value } = event.target.files[0];
//     setCompanyParentCategoryState({
//       ...companyParentCategoryState,
//       image: event.target.files[0],
//     });
//   };
//   let handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addCompanyCategory(companyParentCategoryState));
//     dispatch(getAllCompanyCategories());
//   };
//   let handleCompanyParentCategoryOnChange = (e) => {
//     e.preventDefault();
//   };
//   const columns = [
//     { title: "Category", render: (rowData) => rowData.category },
//     {
//       title: "Parent",
//       render: (rowData) => (rowData.parent ? rowData.parent : "None"),
//     },
//     {
//       title: "Image",
//       render: (rowData) =>
//         rowData.image ? (
//           <img src={rowData.image} style={{ height: "40px", width: "50px" }} />
//         ) : (
//           "None"
//         ),
//     },
//   ];
//   const options = {
//     search: true,
//     paging: true,
//   };
//   const tableTitle = "Company Categories Manager";
//   let selectOptions = [
//     {
//       value: "0",
//       label: "Select Parent Category (If Any)",
//     },
//   ];

//   if (
//     companyAllCategories &&
//     companyAllCategories.data &&
//     companyAllCategories.data.data.length > 0
//   ) {
//     for (var i = 0; i < companyAllCategories.data.data.length; i++) {
//       var obj = {};
//       console.log(
//         "companyAllCategories.data.data",
//         companyAllCategories.data.data
//       );
//       obj["value"] = companyAllCategories.data.data[i]._id;
//       obj["label"] = companyAllCategories.data.data[i].category;
//       selectOptions.push(obj);
//     }
//   }
//   return (
//     <BackEndLayout>
//       <div className="content-wrapper">
//         <div className="content-header">
//           <div className="container-fluid">
//             <div className="row mb-2">
//               <div className="col-sm-6">
//                 <h1 className="m-0 text-dark">Dashboard</h1>
//               </div>
//               <div className="col-sm-6">
//                 <ol className="breadcrumb float-sm-right">
//                   <li className="breadcrumb-item">
//                     <Link to="/admin/dashboard">Home</Link>
//                   </li>
//                   <li className="breadcrumb-item active">Contact Us</li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div>
//         <section className="content">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12">
//                 <div className="card">
//                   <div className="card-head">
//                     <div className="row" style={{ padding: "11px 11px" }}>
//                       <div className="col-12">
//                         <div className="row">
//                           <div className="col-12">
//                             <div className="row mb-2">
//                               <div className="col-12">
//                                 <h4>Manage the Categories </h4>
//                               </div>
//                               <div
//                                 className="col-12 p-5"
//                                 style={{ border: "1px solid blue" }}
//                               >
//                                 <form
//                                   onSubmit={handleSubmit}
//                                   encType="multipart/form-data"
//                                 >
//                                   <div className="row my-3">
//                                     <div className="col-12">
//                                       Add Category : (Leave category blank to
//                                       create parent category- image is for
//                                       parent category only)
//                                     </div>
//                                   </div>
//                                   <div className="row">
//                                     {companyParentCategoryState.imageIsRequired ===
//                                       true && (
//                                       <div className="col-3">
//                                         <input
//                                           type="file"
//                                           className="form-control"
//                                           name="image"
//                                           onChange={handleFileChange}
//                                           required
//                                         />
//                                       </div>
//                                     )}
//                                     <div className="col-3">
//                                       <select
//                                         type="text"
//                                         className="form-control"
//                                         name="parent"
//                                         onChange={handleInputChange}
//                                       >
//                                         {selectOptions.map((option, index) => (
//                                           <option
//                                             value={option.value}
//                                             key={index}
//                                           >
//                                             {option.label}
//                                           </option>
//                                         ))}
//                                       </select>
//                                     </div>
//                                     <div className="col-4">
//                                       <input
//                                         type="text"
//                                         id="category"
//                                         className="form-control"
//                                         name="category"
//                                         onChange={handleInputChange}
//                                         placeholder="Enter The Category Name"
//                                         required
//                                       />
//                                     </div>
//                                     <div className="col-2">
//                                       <button
//                                         type="submit"
//                                         className="btn btn-xs btn-block btn-primary"
//                                       >
//                                         <i className="fa fa-plus"></i> Add
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </form>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-12">
//                             {companyAllCategories &&
//                               companyAllCategories.data &&
//                               companyAllCategories.data.data.length > 0 && (
//                                 <MaterialTable
//                                   title={tableTitle}
//                                   data={companyAllCategories.data.data}
//                                   columns={columns}
//                                   options={options}
//                                 />
//                               )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </BackEndLayout>
//   );
// };

// export default BackEndViewAllCompanyCategories;
