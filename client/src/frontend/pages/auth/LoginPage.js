import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import classnames from 'classnames';
import { loginUser } from '../../../actions/authActions'
import TextFieldGroup from '../../../common/TextFieldGroup'
import FrontEndLayout from '../../layouts/FrontEndLayout'
import isEmpty from '../../../validations/is-empty'
class LoginPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount () {
    if (
      this.props.auth.isAuthenticated &&
      this.props.auth.role &&
      this.props.auth.role === 'ADMIN'
    ) {
      this.props.history.push('/admin/dashboard')
    } else if (
      this.props.auth.isAuthenticated &&
      this.props.auth.role &&
      this.props.auth.role === 'Customer'
    ) {
      this.props.history.push('/dashboard')
    } else {
      this.props.history.push('/login')
    }
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    if (nextProps.auth.isAuthenticated) {
      if (nextProps.auth.role === 'CUSTOMER') {
        nextProps.history.push('/customer/dashboard')
      } else if (nextProps.auth.role === 'ADMIN') {
        nextProps.history.push('/admin/dashboard')
      }
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onSubmit (e) {
    e.preventDefault()

    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userData)
  }
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const { errors, email, password } = this.state
    return (
      <FrontEndLayout>
        <div className='login'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 m-auto'>
                <h1 className='display-4 text-center'>Log In</h1>
                <p className='lead text-center'>
                  Sign in to your SkyBook account
                </p>
                <span className='text-danger'>
                  {!isEmpty(errors) ? errors : ''}
                </span>
                <form noValidate onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder='Email Address'
                    onChange={this.onChange}
                    value={email}
                    type='email'
                    name='email'
                    error={errors.email}
                  />
                  <TextFieldGroup
                    placeholder='Password'
                    onChange={this.onChange}
                    value={password}
                    type='password'
                    name='password'
                    error={errors.password}
                  />
                  <input
                    type='submit'
                    className='btn btn-info btn-block mt-4'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </FrontEndLayout>
    )
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.string.isRequired
}

const mapStateToProps = state => ({ auth: state.auth, errors: state.errors })

export default connect(mapStateToProps, { loginUser })(LoginPage)
