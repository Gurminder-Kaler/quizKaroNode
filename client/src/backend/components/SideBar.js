import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const SideBar = () => {
  const location = useLocation()
  const { pathname } = location
  const splitUrl = pathname.split('/')
  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4'>
      {/* Brand Logo */}
      <Link to='/' className='brand-link'>
        {/* <img src="/%PUBLIC_URL%/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
        <span className='brand-text font-weight-light'>SkyBook</span>
      </Link>
      {/* Sidebar */}
      <div className='sidebar'>
        {/* Sidebar user panel (optional) */}
        <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
          <div className='image'>
            {/* <img src="/%PUBLIC_URL%/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" /> */}
          </div>
          <div className='info'>
            <a href='#' className='d-block'>
              Admin
            </a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className='mt-2'>
          <ul
            className='nav nav-pills nav-sidebar flex-column'
            data-widget='treeview'
            role='menu'
            data-accordion='false'
          >
            {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
            <li className='nav-item has-treeview menu-open'>
              <Link
                to='/admin/dashboard'
                className={
                  splitUrl[1] === 'admin' && splitUrl[2] === 'dashboard'
                    ? 'active nav-link'
                    : 'nav-link'
                }
              >
                <i className='nav-icon fas fa-tachometer-alt' />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/admin/user'
                className={
                  splitUrl[1] === 'admin' && splitUrl[2] === 'user'
                    ? 'active nav-link'
                    : 'nav-link'
                }
              >
                <i className='nav-icon fas fa-users' />
                <p>Users</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/admin/quiz'
                className={
                  splitUrl[1] === 'admin' && splitUrl[2] === 'quiz'
                    ? 'active nav-link'
                    : 'nav-link'
                }
              >
                <i className='nav-icon fas fa-question' />
                <p>Quiz</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/admin/quizCategory'
                className={
                  splitUrl[1] === 'admin' && splitUrl[2] === 'quizCategory'
                    ? 'active nav-link'
                    : 'nav-link'
                }
              >
                <i className='nav-icon fas fa-question' />
                <p>Quiz Category</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  )
}
export default SideBar
