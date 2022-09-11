import React, { useEffect } from 'react'
import BackEndLayout from '../layouts/BackEndLayout'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const BackEndDashboard = props => {
  useEffect(() => {
    if (props.auth.isAuthenticated === false) {
      props.history.push('/login')
    }
  }, [])

  return (
    <BackEndLayout>
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
                  <li className='breadcrumb-item active'>Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className='content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-3 col-6'>
                <div className='small-box bg-info'>
                  <div className='inner'>
                    <h3>150</h3>
                    <p>New Orders</p>
                  </div>
                  <div className='icon'>
                    <i className='ion ion-bag' />
                  </div>
                  <a href='#' className='small-box-footer'>
                    More info <i className='fas fa-arrow-circle-right' />
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-6'>
                <div className='small-box bg-success'>
                  <div className='inner'>
                    <h3>
                      53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>
                    <p>Bounce Rate</p>
                  </div>
                  <div className='icon'>
                    <i className='ion ion-stats-bars' />
                  </div>
                  <a href='#' className='small-box-footer'>
                    More info <i className='fas fa-arrow-circle-right' />
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-6'>
                <div className='small-box bg-warning'>
                  <div className='inner'>
                    <h3>44</h3>
                    <p>User Registrations</p>
                  </div>
                  <div className='icon'>
                    <i className='ion ion-person-add' />
                  </div>
                  <a href='#' className='small-box-footer'>
                    More info <i className='fas fa-arrow-circle-right' />
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-6'>
                <div className='small-box bg-danger'>
                  <div className='inner'>
                    <h3>65</h3>
                    <p>Unique Visitors</p>
                  </div>
                  <div className='icon'>
                    <i className='ion ion-pie-graph' />
                  </div>
                  <a href='#' className='small-box-footer'>
                    More info <i className='fas fa-arrow-circle-right' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BackEndLayout>
  )
}
BackEndDashboard.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ auth: state.auth })

export default withRouter(connect(mapStateToProps, {})(BackEndDashboard))
