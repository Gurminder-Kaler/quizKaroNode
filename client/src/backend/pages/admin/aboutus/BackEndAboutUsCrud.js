// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import BackEndLayout from '../../../layouts/BackEndLayout'
// import {
//   getGuideline,
//   updateGuideline
// } from '../../../../actions/guidelineActions'
// import { CKEditor } from '@ckeditor/ckeditor5-react'

// import { Link } from 'react-router-dom'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

// const BackEndAboutUsCrud = props => {
//   const aboutus = useSelector(state => state.guideline.guideline)

//   const initialState = {
//     data: '',
//     type: 'aboutus'
//   }

//   const [aboutusState, setAboutUsState] = useState(initialState)

//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getGuideline('aboutus'))
//   }, [])

//   let handleUpdate = e => {
//     e.preventDefault()
//     dispatch(updateGuideline(aboutusState))
//   }

//   let handleOnChange = (e, editor) => {
//     var data = {
//       type: 'aboutus',
//       data: editor.getData()
//     }
//     setAboutUsState(data)
//   }

//   const options = {
//     search: true,
//     paging: true
//   }

//   return (
//     <BackEndLayout>
//       {console.log('aboutus', aboutus)}
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
//                     <Link to='/'>Home</Link>
//                   </li>
//                   <li className='breadcrumb-item active'>About Us</li>
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
//                             <div className='row mb-2'>
//                               <div className='col-4'>
//                                 <h4>Update the About Us </h4>
//                               </div>
//                               <div className='col-8'>
//                                 <button
//                                   type='button'
//                                   className='btn btn-sm btn-success'
//                                   onClick={handleUpdate}
//                                 >
//                                   {' '}
//                                   Update
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                           <div className='col-12'>
//                             <CKEditor
//                               editor={ClassicEditor}
//                               onChange={handleOnChange}
//                               data={
//                                 aboutus && aboutus.data && aboutus.data.data
//                                   ? aboutus.data.data
//                                   : ''
//                               }
//                             />
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

// export default BackEndAboutUsCrud
