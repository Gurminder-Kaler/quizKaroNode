import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {registerUser} from '../../../actions/authActions';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../../common/TextFieldGroup';
import FrontEndLayout from '../../layouts/FrontEndLayout';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
        this.onSubmitHandler = this
            .onSubmitHandler
            .bind(this);
        this.onChangeHandler = this
            .onChangeHandler
            .bind(this);
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitHandler(e) {
        e.preventDefault();
        const newUser = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        this
            .props
            .registerUser(newUser, this.props.history);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this
                .props
                .history
                .push('/dashboard');
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    render() {
        const {
            errors,
            firstname,
            lastname,
            email,
            password,
            password2
        } = this.state;
        return (
          <FrontEndLayout>
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your SkyBook account</p>
                            <form noValidate onSubmit={this.onSubmitHandler}>
                                <TextFieldGroup
                                    placeholder="First Name"
                                    onChange={this.onChangeHandler}
                                    value={firstname}
                                    name="firstname"
                                    error={errors.firstname}/>
                                <TextFieldGroup
                                    placeholder="Last Name"
                                    onChange={this.onChangeHandler}
                                    value={lastname}
                                    name="lastname"
                                    error={errors.lastname}/>
                                <TextFieldGroup
                                    placeholder="Email Address"
                                    onChange={this.onChangeHandler}
                                    value={email}
                                    type="email"
                                    name="email"
                                    error={errors.email} />
                                <TextFieldGroup
                                    placeholder="Password"
                                    onChange={this.onChangeHandler}
                                    value={password}
                                    type="password"
                                    name="password"
                                    error={errors.password}/>
                                <TextFieldGroup
                                    placeholder="Confirm Password"
                                    onChange={this.onChangeHandler}
                                    value={password2}
                                    type="password"
                                    name="password2"
                                    error={errors.password2}/>
                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </FrontEndLayout>
        );
    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({auth: state.auth, errors: state.errors});
export default connect(mapStateToProps, {registerUser})(withRouter(Register));