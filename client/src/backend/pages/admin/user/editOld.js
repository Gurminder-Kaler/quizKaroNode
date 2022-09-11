import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserViaId, updateUser } from '../../../../actions/userActions';
import TextFieldGroup from '../../../../common/TextFieldGroup';
import BackEndLayout from '../../../layouts/BackEndLayout';
import isEmpty from '../../../../validations/is-empty';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

class BackEndUserCrudEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userId:'',
            errors: ''
        };
        this.onChange = this
            .onChange
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    componentDidMount() {
        this.props.getUserViaId(this.props.match.params.id);
        this.setState({
            userId: this.props.match.params.id
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
        if(nextProps.user) {
            this.setState({
                firstName: nextProps.user.firstName,
                lastName: nextProps.user.lastName
            });
        }
    }
    onSubmit(e) {
        e.preventDefault();

        const userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userId: this.state.userId
        };

        this.props.updateUser(userData, this.props.history);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {firstName, lastName}  = this.state;
        return (
          <BackEndLayout>
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Update User</h1>
                            <form noValidate onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder="First Name"
                                    onChange={this.onChange}
                                    value={firstName ? firstName : ''}
                                    type="text"
                                    name="firstName"
                                    />
                                <TextFieldGroup
                                    placeholder="Last Name"
                                    onChange={this.onChange}
                                    value={lastName ? lastName : ''}
                                    type="text"
                                    name="lastName"

                                    />
                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </BackEndLayout>
          );
      }
}

BackEndUserCrudEdit.propTypes = {
    user: PropTypes.object.isRequired,
    errors: PropTypes.string.isRequired
};
function mapStateToProps(state) {
    return {
        user: state.user && state.user.user ? state.user.user : {},
        errors: state.errors
    }
}

export default connect(mapStateToProps, { getUserViaId, updateUser })(BackEndUserCrudEdit);
