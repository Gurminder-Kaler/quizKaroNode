// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import FrontEndLayout from "./../../layouts/FrontEndLayout";
// import { getCompaniesViaUserId } from "../../../actions/companyActions";
// import MaterialTable from "material-table";

// import { Link } from "react-router-dom";
// const CustomerAllCompanies = (props) => {
//   const authUser = useSelector((state) => state.auth.user);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getCompaniesViaUserId(authUser._id)); // component DID Mount
//     // component DID Mount
//   }, []);

//   const companies = useSelector((state) => state.company.companies);
//   const columns = [
//     { title: "Company Name", field: "name" },
//     // { title: 'Photos', field: 'photos' },
//     {
//       title: "Action",
//       render: (rowData) => (
//         <Link
//           to={`/customer/company/${rowData._id}`}
//           className="btn btn-sm btn-primary"
//           type="button"
//         >
//           <i className="fa fa-comment"> {` Chat with ${rowData.firstName}`}</i>
//         </Link>
//       ),
//     },
//   ];
//   const options = {
//     search: true,
//     paging: true,
//   };
//   const tableTitle = "All your companies' list";

//   return (
//     <FrontEndLayout>
//       <div className="container">
//         <div className="content-header">
//           <div className="row mb-2">
//             <div className="col-sm-6">
//               <h1 className="m-0 text-dark">{tableTitle}</h1>
//             </div>
//             <div className="col-sm-6">
//               <Link
//                 className="btn btn-sm btn-success"
//                 to={"/customer/company/create"}
//               >
//                 <i className="fa fa-plus"></i> Create Company
//               </Link>
//               <ol className="breadcrumb float-sm-right">
//                 <li className="breadcrumb-item">
//                   <Link to={"/customer/dashboard"}>Home</Link>
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
//                     {companies && companies.length > 0 ? (
//                       <MaterialTable
//                         title={tableTitle}
//                         data={companies}
//                         columns={columns}
//                         options={options}
//                       />
//                     ) : (
//                       "No Records Found"
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

// export default CustomerAllCompanies;
