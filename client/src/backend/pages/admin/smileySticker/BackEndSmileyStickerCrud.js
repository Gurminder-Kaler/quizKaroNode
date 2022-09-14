// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// // import { Link } from "react-router-dom";
// import BackEndLayout from '../../../layouts/BackEndLayout'
// import {
//   getAllSmileySticker,
//   addSmileySticker
// } from '../../../../actions/smileyStickerActions'
// import MaterialTable from 'material-table'

// const BackEndSmileyStickerCrud = props => {
//   const smilies = useSelector(state => state.icons.icons)
//   const initialSmileyStickerState = {
//     icon: '',
//     type: ''
//   }
//   const [smileySticker, setSmileySticker] = useState(initialSmileyStickerState)
//   const dispatch = useDispatch()
//   const typeSticker = 'sticker'
//   const typeSmiley = 'smiley'
//   useEffect(() => {
//     dispatch(getAllSmileySticker(typeSticker))
//   }, [])

//   const columns = [
//     {
//       title: 'Icon',
//       render: rowData => (
//         <img
//           src={`${rowData.icon}`}
//           style={{ height: '90px', width: '120px' }}
//           alt={`asd`}
//         />
//       )
//     },
//     { title: 'Type (smiley / sticker)', field: 'type' }
//   ]
//   const handleSelectType = type => {
//     dispatch(getAllSmileySticker(type))
//   }
//   const handleTypeChange = event => {
//     console.log('event target', event.target.value)
//     // const { name, value } = event.target;
//     setSmileySticker({ ...smileySticker, type: event.target.value })
//   }
//   const handleFileChange = event => {
//     console.log('event target', event.target.files[0])
//     // const { name, value } = event.target.files[0];
//     setSmileySticker({ ...smileySticker, icon: event.target.files[0] })
//   }
//   let handleSubmit = e => {
//     e.preventDefault()
//     console.log('smileySticker state', smileySticker)
//     dispatch(addSmileySticker(smileySticker))
//   }
//   const options = {
//     search: true,
//     paging: true
//   }
//   const tableTitle = 'Smilies Stickers List'

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
//                   <li className='breadcrumb-item active'>
//                     Smilies and Stickers
//                   </li>
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
//                       <div
//                         className='col-3 text-center'
//                         style={{ border: '1px solid red' }}
//                       >
//                         <div className='row'>
//                           <div className='col-12'>Sort By: </div>
//                         </div>
//                         <div className='row'>
//                           <div className='col-6'>
//                             <div className='form-group'>
//                               <label htmlFor='Stickers'>Stickers:</label>
//                               <input
//                                 type='radio'
//                                 className='selectOptions'
//                                 name='Stickers'
//                                 id='Stickers'
//                                 onClick={() => handleSelectType(typeSticker)}
//                               />
//                             </div>
//                           </div>
//                           <div className='col-6'>
//                             <div className='form-group'>
//                               <label htmlFor='Smilies'>Smilies:</label>
//                               <input
//                                 type='radio'
//                                 className='selectOptions'
//                                 onClick={() => handleSelectType(typeSmiley)}
//                                 name='Stickers'
//                                 id='Smilies'
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div
//                         className='col-9'
//                         style={{ border: '1px solid blue' }}
//                       >
//                         <form
//                           onSubmit={handleSubmit}
//                           encType='multipart/form-data'
//                         >
//                           <div className='row'>
//                             <div className='col-12'>Upload : </div>
//                           </div>
//                           <div className='row'>
//                             <div className='col-6'>
//                               <input
//                                 type='file'
//                                 id='icon'
//                                 className='form-control'
//                                 name='icon'
//                                 onChange={handleFileChange}
//                               />
//                             </div>
//                             <div className='col-4'>
//                               <select
//                                 type='text'
//                                 id='type'
//                                 className='form-control'
//                                 name='type'
//                                 onChange={handleTypeChange}
//                               >
//                                 <option selected disabled>
//                                   Select Type
//                                 </option>
//                                 <option value='sticker'>sticker</option>
//                                 <option value='smiley'>smiley</option>
//                               </select>
//                             </div>
//                             <div className='col-2'>
//                               <button
//                                 type='submit'
//                                 className='btn btn-xs btn-primary'
//                               >
//                                 Upload
//                               </button>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                   <div className='card-body'>
//                     {smilies && smilies.length > 0 && (
//                       <MaterialTable
//                         title={tableTitle}
//                         data={smilies}
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
//   )
// }

// export default BackEndSmileyStickerCrud
