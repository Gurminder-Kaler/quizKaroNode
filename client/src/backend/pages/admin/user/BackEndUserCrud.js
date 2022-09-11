import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {Link} from 'react-router-dom';
import BackEndLayout from '../../../layouts/BackEndLayout'
import { getAllUsers } from '../../../../actions/userActions'
import MaterialTable from 'material-table'

const BackEndUserCrud = props => {
  const [role, setRole] = useState('')
  const user = useSelector(state => state.user.user)
  const initialUserState = {
    id: user && user.id,
    firstName: user && user.firstName,
    lastName: user && user.lastName
  }
  const [currentUser, setCurrentUser] = useState(initialUserState)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const users = useSelector(state => state.user.users)
  const dispatch = useDispatch()
  const setActiveUser = (user, index) => {
    setCurrentUser(user)
    setCurrentIndex(index)
  }
  useEffect(() => {
    dispatch(getAllUsers())
    setRole(localStorage.getItem('role'))
  }, [])

  const columns = [
    { title: 'First Name', field: 'firstName' },
    { title: 'Last Name', field: 'lastName' },
    { title: 'Email', field: 'email' },
    { title: 'User Name', field: 'userName' },
    { title: 'Role', field: 'role' }
    // {
    //   title: 'Action',
    //   render: rowData => <Link to={`/admin/user/edit/${rowData._id}`} onClick={ () => setActiveUser(rowData, rowData._id)} className="btn btn-sm btn-primary" type="button"><i className="fa fa-edit"></i></Link>
    // }
  ]
  const options = {
    search: true,
    paging: true
  }
  const tableTitle = 'User List'

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
                    <a>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>Dashboard v1</li>
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
                    {users && users.length > 0 && (
                      <MaterialTable
                        title={tableTitle}
                        data={users}
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

export default BackEndUserCrud
