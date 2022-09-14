// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import BackEndLayout from '../../../layouts/BackEndLayout'
// import MaterialTable from 'material-table'
// import { getAllGroups } from '../../../../actions/chatActions'

// const BackEndAllGroups = props => {
//   const dispatch = useDispatch()

//   const groups = useSelector(state => state.chat.groups)
//   const initialState = {
//     groups: []
//   }

//   useEffect(() => {
//     dispatch(getAllGroups())
//   }, [])

//   const [groupState, setgroupState] = useState(initialState)
//   const tableTitle = 'List of All Groups'
//   const columns = [
//     {
//       title: 'Group Id',
//       render: rowData => (rowData._id ? rowData._id : 'None')
//     },
//     {
//       title: 'Group Name',
//       render: rowData => (rowData.name ? rowData.name : 'None')
//     },
//     {
//       title: 'Participants',
//       render: rowData => (rowData.userIds ? rowData.userIds.length : 'None')
//     },
//     {
//       title: 'Created On',
//       render: rowData => (rowData.createdAt ? rowData.createdAt : 'None')
//     },
//     {
//       title: 'Created By',
//       render: rowData =>
//         rowData.createdBy ? rowData.createdBy.userName : 'None'
//     },
//     {
//       title: 'Action',
//       render: rowData => (
//         <Link to={`/admin/chat/group/` + rowData._id}>
//           <button className='btn btn-xs btn-success'>
//             <i className='fa fa-eye'></i> View
//           </button>
//         </Link>
//       )
//     }
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
//                 <h1 className='m-0 text-dark'>All Groups</h1>
//               </div>
//               <div className='col-sm-6'>
//                 <ol className='breadcrumb float-sm-right'>
//                   <li className='breadcrumb-item'>
//                     <a href='#'>Home</a>
//                   </li>
//                   <li className='breadcrumb-item active'>View All Groups</li>
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
//                             {groups && groups.length > 0 && (
//                               <MaterialTable
//                                 title={tableTitle}
//                                 data={groups}
//                                 columns={columns}
//                                 options={options}
//                               />
//                             )}
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

// export default BackEndAllGroups
