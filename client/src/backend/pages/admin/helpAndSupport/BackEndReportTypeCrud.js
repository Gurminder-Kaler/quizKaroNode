// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import BackEndLayout from "../../../layouts/BackEndLayout";
// import {
//   getAllReportTypes,
//   addReportType,
//   changeReportTypeStatus,
// } from "../../../../actions/helpAndSupportActions";
// import MaterialTable from "material-table";

// const BackEndReportTypeCrud = (props) => {
//   const reportTypes = useSelector((state) => state.helpAndSupport.reportTypes);
//   const initialReportTypes = {
//     reportType: "",
//   };
//   const [reportType, setReportType] = useState(initialReportTypes);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllReportTypes());
//   }, []);

//   const columns = [
//     { title: "Report Type", render: (rowData) => `${rowData.data}` },
//     {
//       title: "Status",
//       render: (rowData) => (
//         <input
//           type="checkbox"
//           className="form-check-input"
//           defaultChecked={rowData.status}
//           onClick={() => onStatusClick(rowData)}
//           style={{ border: "1px solid rgb(255 10 10 / 82%) " }}
//         />
//       ),
//     },
//   ];
//   let handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addReportType(reportType));
//     dispatch(getAllReportTypes());
//   };
//   let onStatusClick = (data) => {
//     console.log("data123", data);
//     dispatch(changeReportTypeStatus(data));
//   };
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setReportType({ ...reportType, [name]: value });
//   };

//   const options = {
//     search: true,
//     paging: true,
//   };
//   const tableTitle = "Report Types List";

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
//                     <a href="#">Home</a>
//                   </li>
//                   <li className="breadcrumb-item active">Report Types</li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div>
//         <section className="content">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12">
//                 <form onSubmit={handleSubmit}>
//                   <div className="row my-3">
//                     <div className="col-2">Add Report Type : </div>
//                     <div className="col-4">
//                       <input
//                         type="text"
//                         id="data"
//                         onChange={handleInputChange}
//                         name="data"
//                         className="form-control"
//                       />
//                     </div>
//                     <div className="col-2">
//                       <button type="submit" className="btn btn-xs btn-primary">
//                         Add Report Type
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-12">
//                 <div className="card">
//                   <div className="card-body">
//                     {reportTypes && reportTypes.length > 0 && (
//                       <MaterialTable
//                         title={tableTitle}
//                         data={reportTypes}
//                         columns={columns}
//                         options={options}
//                       />
//                     )}
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

// export default BackEndReportTypeCrud;
