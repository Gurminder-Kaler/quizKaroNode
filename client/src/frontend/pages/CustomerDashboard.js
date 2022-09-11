import React from 'react'
import FrontEndLayout from '../layouts/FrontEndLayout'

function CustomerDashboard () {
  return (
    <FrontEndLayout>
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
                  <li className='breadcrumb-item active'>Contact Us</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className='content'>This is Customer Dashboard</section>
      </div>
    </FrontEndLayout>
  )
}

export default CustomerDashboard
