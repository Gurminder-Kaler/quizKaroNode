import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FrontEndLayout from "./../../layouts/FrontEndLayout";
import { getAllFriends } from "../../../actions/friendActions";
import MaterialTable from "material-table";

import { Link } from "react-router-dom";
const CustomerAllFriends = (props) => {
  const userState = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFriends(userState._id)); // component DID Mount
  }, []);

  const friends = useSelector((state) => state.friend.friends);
  const columns = [
    { title: "Name", field: "firstName" },
    { title: "username", field: "userName" },
    { title: "mobileNo", field: "mobileNo" },
    { title: "dob", render: (rowData) => rowData.dob },
    // { title: 'Photos', field: 'photos' },
    {
      title: "Action",
      render: (rowData) => (
        <Link
          to={`/customer/friend/chat/${rowData._id}`}
          className="btn btn-sm btn-primary"
          type="button"
        >
          <i className="fa fa-comment"> {` Chat with ${rowData.firstName}`}</i>
        </Link>
      ),
    },
  ];
  const options = {
    search: true,
    paging: true,
  };
  const tableTitle = "All friends List";

  return (
    <FrontEndLayout>
      <div className="container">
        <div className="content-header">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">All your friends</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    {friends && friends.length > 0 ? (
                      <MaterialTable
                        title={tableTitle}
                        data={friends}
                        columns={columns}
                        options={options}
                      />
                    ) : (
                      "No Friends Found"
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </FrontEndLayout>
  );
};

export default CustomerAllFriends;
