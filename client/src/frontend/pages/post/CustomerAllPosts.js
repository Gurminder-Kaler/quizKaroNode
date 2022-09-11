import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FrontEndLayout from "./../../layouts/FrontEndLayout";
import {
  getAllPosts,
  setCurrentPost,
  getAPostViaId,
} from "../../../actions/postActions";
import MaterialTable from "material-table";

const CustomerAllPosts = (props) => {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(getAllPosts(userState._id)); // component DID Mount
  }, []);
  const posts = useSelector((state) => state.post.posts);
  const columns = [
    { title: "Post", field: "post" },
    { title: "Like Count", field: "likeCount" },
    { title: "DisLike Count", field: "disLikeCount" },
    // { title: 'Photos', field: 'photos' },
    {
      title: "Action",
      render: (rowData) => (
        <Link
          to={{ pathname: `/customer/post/edit/${rowData._id}`, post: rowData }}
          className="btn btn-sm btn-primary"
          type="button"
          // onClick={() => setCurrentPost(rowData)}
          // onClick={() => getAPostViaId(rowData._id)}
        >
          <i className="fa fa-edit"></i>
        </Link>
      ),
    },
  ];
  const options = {
    search: true,
    paging: true,
  };
  const tableTitle = "All your posts' list";

  return (
    <FrontEndLayout>
      <div className="container">
        <div className="content-header">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">{tableTitle}</h1>
            </div>
            <div className="col-sm-6">
              <Link
                className="btn btn-sm btn-success"
                to={"/customer/post/create"}
              >
                <i className="fa fa-plus"></i> Create Post
              </Link>
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to={"/customer/dashboard"}>Home</Link>
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
                    {posts && posts.length > 0 ? (
                      <MaterialTable
                        title={tableTitle}
                        data={posts}
                        columns={columns}
                        options={options}
                      />
                    ) : 'No Posts Found'}
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

export default CustomerAllPosts;
