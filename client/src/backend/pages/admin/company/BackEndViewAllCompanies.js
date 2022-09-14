// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import BackEndLayout from '../../../layouts/BackEndLayout'
// import MaterialTable from 'material-table'
// import {
//   getAllCompanies,
//   changeCompanyStatus
// } from '../../../../actions/companyActions'

// const BackEndViewAllCompanies = props => {
//   const dispatch = useDispatch()

//   const companies = useSelector(state => state.company.companies)
//   // const initialState = {
//   //   companies: []
//   // }

//   useEffect(() => {
//     dispatch(getAllCompanies())
//   }, [])

//   let onSelectChange = (value, id) => {
//     console.log('value', value, id)
//     let obj = {
//       status: value,
//       _id: id
//     }
//     dispatch(changeCompanyStatus(obj))
//   }
//   // const [companyState, setCompanyState] = useState(initialState)
//   const tableTitle = 'All Companies'
//   const columns = [
//     { title: 'Company Name', render: rowData => rowData.name },
//     {
//       title: 'Created On',
//       render: rowData => (rowData.createdAt ? rowData.createdAt : 'None')
//     },

//     {
//       title: 'Account Name',
//       render: rowData =>
//         rowData.createdBy.email
//           ? rowData.createdBy.firstName + ' | ' + rowData.createdBy.email
//           : 'None'
//     },

//     {
//       title: 'Category',
//       render: rowData =>
//         rowData.category.category ? rowData.category.category : 'None'
//     },

//     {
//       title: 'Action',
//       render: rowData => (
//         <select
//           onChange={e => onSelectChange(e.target.value, rowData._id)}
//           defaultSelected='visible'
//         >
//           <option value='visible'>Visible</option>
//           <option value='hidden'>Hidden</option>
//         </select>
//       )
//     }
//     // {
//     //   title: "Image",
//     //   render: (rowData) =>
//     //     rowData.image ? (
//     //       <img src={rowData.image} style={{ height: "40px", width: "50px" }} />
//     //     ) : (
//     //       "None"
//     //     ),
//     // },
//     // {
//     //   title: "Cover Image",
//     //   render: (rowData) =>
//     //     rowData.coverImage ? (
//     //       <img
//     //         src={rowData.coverImage}
//     //         style={{ height: "40px", width: "90px" }}
//     //       />
//     //     ) : (
//     //       "None"
//     //     ),
//     // },
//   ]
//   const options = {
//     search: true,
//     paging: true
//   }
//   return (
//     <BackEndLayout>
//       <div className='content-wrapper'>
//         <div className='content-header'>
//           <div className='container-fluid'>
//             <div className='row mb-2'>
//               <div className='col-sm-6'>
//                 <h1 className='m-0 text-dark'>Dashboard</h1>
//               </div>
//               <div className='col-sm-6'>
//                 <ol className='breadcrumb float-sm-right'>
//                   <li className='breadcrumb-item'>
//                     <a href='#'>Home</a>
//                   </li>
//                   <li className='breadcrumb-item active'>View All Companies</li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div>
//         <section className='content'>
//           <div className='container-fluid'>
//             <div className='row'>
//               <div className='col-12'>
//                 <div className='card'>
//                   <div className='card-head'>
//                     <div className='row' style={{ padding: '11px 11px' }}>
//                       <div className='col-12'>
//                         <div className='row'>
//                           <div className='col-12'>
//                             {companies &&
//                               companies.data &&
//                               companies.data.data.length > 0 && (
//                                 <MaterialTable
//                                   title={tableTitle}
//                                   data={companies.data.data}
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
//   )
// }

// export default BackEndViewAllCompanies
