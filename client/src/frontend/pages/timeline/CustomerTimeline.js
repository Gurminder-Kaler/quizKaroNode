import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import FrontEndLayout from './../../layouts/FrontEndLayout'
// import { getAllPosts } from '../../../actions/postActions'
// import MaterialTable from 'material-table'

const CustomerTimeline = () => {
  return (
    <FrontEndLayout>
      <div className='row'>
        <div
          className='col-3'
          style={{
            border: '1px solid rgb(205 173 193 / 39%)',
            overflowY: 'scroll',
            maxHeight: '640px'
          }}
        >
          <div className='row'>
            <div className='col-12'>
              <div className='row text-center'>
                <div className='col-12 my-3 text-danger'>
                  <b>People You May know</b>
                </div>
              </div>
              <div className='card'>
                <div className='row'>
                  <div className='col-4 p-1'>
                    <img
                      className='card-img-top'
                      src='/assets/images/avatar.png'
                      style={{
                        width: '140px',
                        height: '150px',
                        borderRadius: '270px'
                      }}
                      alt='Card image cap'
                    />
                  </div>
                  <div className='col-8'>
                    <div className='card-body'>
                      <p className='card-heading'>Heading</p>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='row'>
                  <div className='col-4 p-1'>
                    <img
                      className='card-img-top'
                      src='/assets/images/avatar.png'
                      style={{
                        width: '140px',
                        height: '150px',
                        borderRadius: '270px'
                      }}
                      alt='Card image cap'
                    />
                  </div>
                  <div className='col-8'>
                    <div className='card-body'>
                      <p className='card-heading'>Heading</p>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='row'>
                  <div className='col-4 p-1'>
                    <img
                      className='card-img-top'
                      src='/assets/images/avatar.png'
                      style={{
                        width: '140px',
                        height: '150px',
                        borderRadius: '270px'
                      }}
                      alt='Card image cap'
                    />
                  </div>
                  <div className='col-8'>
                    <div className='card-body'>
                      <p className='card-heading'>Heading</p>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='row'>
                  <div className='col-4 p-1'>
                    <img
                      className='card-img-top'
                      src='/assets/images/avatar.png'
                      style={{
                        width: '140px',
                        height: '150px',
                        borderRadius: '270px'
                      }}
                      alt='Card image cap'
                    />
                  </div>
                  <div className='col-8'>
                    <div className='card-body'>
                      <p className='card-heading'>Heading</p>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='row'>
                  <div className='col-4 p-1'>
                    <img
                      className='card-img-top'
                      src='/assets/images/avatar.png'
                      style={{
                        width: '140px',
                        height: '150px',
                        borderRadius: '270px'
                      }}
                      alt='Card image cap'
                    />
                  </div>
                  <div className='col-8'>
                    <div className='card-body'>
                      <p className='card-heading'>Heading</p>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='col-9'
          style={{
            border: '1px solid rgb(205 173 193 / 70%)',
            overflowY: 'scroll',
            maxHeight: '640px'
          }}
        >
          <div className='row'>
            <div className='col-12'>
              <div className='row text-center'>
                <div className='col-12 my-3 text-danger'>
                  <b>Timeline posts</b>
                </div>
              </div>
              <div className='card'>
                <div className='row'>
                  <div className='col-4'>
                    <img
                      className='card-img-top'
                      src='/assets/images/avatar.png'
                      style={{
                        width: '140px',
                        height: '150px',
                        borderRadius: '270px'
                      }}
                      alt='Card image cap'
                    />
                  </div>
                  <div className='col-8'>
                    <div className='card-body'>
                      <p className='card-heading'>Heading</p>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='row'>
                  <div className='col-4'>
                    <img
                      className='card-img-top'
                      src='/assets/images/avatar.png'
                      style={{
                        width: '140px',
                        height: '150px',
                        borderRadius: '270px'
                      }}
                      alt='Card image cap'
                    />
                  </div>
                  <div className='col-8'>
                    <div className='card-body'>
                      <p className='card-heading'>Heading</p>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='row'>
                  <div className='col-4'>
                    <img
                      className='card-img-top'
                      src='/assets/images/avatar.png'
                      style={{
                        width: '140px',
                        height: '150px',
                        borderRadius: '270px'
                      }}
                      alt='Card image cap'
                    />
                  </div>
                  <div className='col-8'>
                    <div className='card-body'>
                      <p className='card-heading'>Heading</p>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FrontEndLayout>
  )
}

export default CustomerTimeline
