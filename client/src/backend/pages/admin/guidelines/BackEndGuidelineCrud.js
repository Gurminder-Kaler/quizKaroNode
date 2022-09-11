import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BackEndLayout from '../../../layouts/BackEndLayout'
import {
  getGuideline,
  updateGuideline
} from '../../../../actions/guidelineActions'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const BackEndGuidelineCrud = props => {
  const guideline = useSelector(state => state.guideline.guideline)

  const initialGuidelineState = {
    guideline: ''
  }

  const [guidelineState, setGuidelineState] = useState(initialGuidelineState)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGuideline('guideline'))
  }, [])

  let handleUpdate = e => {
    e.preventDefault()
    dispatch(updateGuideline(guidelineState))
  }

  let handleOnChange = (e, editor) => {
    var data = {
      type: 'guideline',
      data: editor.getData()
    }

    setGuidelineState(data)
  }
  const options = {
    search: true,
    paging: true
  }

  return (
    <BackEndLayout>
      {console.log('guideline', guideline)}
      <div className='content-wrapper'>
        <div className='content-header'>
          <div className='container-fluid'>
            <div className='row mb-2'>
              <div className='col-sm-6'>
                <h1 className='m-0 text-dark'>Dashboard</h1>
              </div>
              <div className='col-sm-6'>
                <ol className='breadcrumb float-sm-right'>
                  <li className='breadcrumb-item'>
                    <a href='#'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>Guideline</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className='content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <div className='card'>
                  <div className='card-head'>
                    <div className='row' style={{ padding: '11px 11px' }}>
                      <div className='col-12'>
                        <div className='row'>
                          <div className='col-12'>
                            <div className='row mb-2'>
                              <div className='col-4'>
                                <h4>Update the Guidelines </h4>
                              </div>
                              <div className='col-8'>
                                <button
                                  type='button'
                                  className='btn btn-sm btn-success'
                                  onClick={handleUpdate}
                                >
                                  {' '}
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className='col-12'>
                            <CKEditor
                              editor={ClassicEditor}
                              onChange={handleOnChange}
                              data={
                                guideline &&
                                guideline.data &&
                                guideline.data.data
                                  ? guideline.data.data
                                  : ''
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BackEndLayout>
  )
}

export default BackEndGuidelineCrud
