import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from "react-router-dom";
import BackEndLayout from '../../../layouts/BackEndLayout'
import { getAllReportMessagesSentToSkyBook } from '../../../../actions/helpAndSupportActions'
import MaterialTable from 'material-table'

const BackEndViewAllReportMessages = props => {
  const reports = useSelector(state => state.helpAndSupport.reports)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllReportMessagesSentToSkyBook())
  }, [])

  const columns = [
    { title: 'Message', render: rowData => `${rowData.message}` },
    {
      title: 'Attachment',
      render: rowData =>
        rowData.attachment ? (
          <a href={rowData.attachment} target='_blank' rel='noreferrer'>
            Attachment
          </a>
        ) : (
          'None'
        )
    },
    {
      title: 'Report Type',
      render: rowData =>
        `${rowData.reportType ? rowData.reportType.data : '--'}`
    },
    {
      title: 'Message From',
      render: rowData =>
        `${rowData.user.firstName} ${
          rowData.user.lastName ? rowData.user.lastName : ''
        } | ${rowData.user.email}`
    }
  ]
  const options = {
    search: true,
    paging: true
  }
  const tableTitle = 'Report Messages'

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
                  <li className='breadcrumb-item active'>Report Messages </li>
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
                  <div className='card-body'>
                    {reports && reports.length > 0 && (
                      <MaterialTable
                        title={tableTitle}
                        data={reports}
                        columns={columns}
                        options={options}
                      />
                    )}
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

export default BackEndViewAllReportMessages
