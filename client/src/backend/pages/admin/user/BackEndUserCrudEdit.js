import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUser } from "../../../../actions/userActions";
import userService from "../../../../services/userService";
import BackEndLayout from '../../../layouts/BackEndLayout';
import TextFieldGroup from '../../../../common/TextFieldGroup';

const BackEndUserCrudEdit = (props) => {
  const initialUserState = {
    id: null,
    firstName: "",
    lastName: ""
  };
  const [currentUser, setCurrentUser] = useState(initialUserState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  let history = useHistory();

  const getUser = id => {
    userService.get(id)
      .then(response => {
        console.log('re', response);
        setCurrentUser({
          ...currentUser,
          id: response.data.data.id,
          firstName: response.data.data.firstName,
          lastName: response.data.data.lastName
          });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUser(props.match.params.id);
  }, [props.match.params.id]);
  //componentDidMount, componentDidUpdate, componentWillUnmount and componentWillReceiveProps
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };


  const updateContent = () => {
    console.log('currentUser /////////////////', currentUser);
  dispatch(updateUser(currentUser, history))
  };

  return (
    <BackEndLayout>
      {currentUser ? (
        <div className="content-wrapper">
          <div className="content-header">
          {console.log('current user', currentUser)}
            <h4>Edit User</h4>
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
              <TextFieldGroup
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={currentUser && currentUser.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <TextFieldGroup
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={currentUser && currentUser.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </form>
            <button
              type="submit"
              className="btn btn-sm btn-success"
              onClick={updateContent}
            >
              Update
            </button>
            <p>{message}</p>
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Uesr...</p>
        </div>
      )}
    </BackEndLayout>
  );
};

export default BackEndUserCrudEdit;
