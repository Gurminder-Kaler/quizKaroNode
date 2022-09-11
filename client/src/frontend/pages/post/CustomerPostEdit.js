import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { updatePost, getAPostViaId } from "../../../actions/postActions";
// import postService from "../../../services/postService";
import FrontEndLayout from "../../layouts/FrontEndLayout";
// import TextFieldGroup from '../../../common/TextFieldGroup';
import TextAreaFieldGroup from "../../../common/TextAreaFieldGroup";

const CustomerPostEdit = (props) => {
  console.log("props", props);
  const history = useHistory();
  const dispatch = useDispatch();
  // const authUser = useSelector(state => state.auth.user)
  let oldPost = props.location.post;

  const [post, setPost] = useState(oldPost.post);

  const [photos, setPhotos] = useState([]);

  const handlePhotosChange = (event) => {
    const { name, value } = event.target;
    setPhotos({ ...photos, [name]: value });
  };
  useEffect(() => {
    setTimeout(() => {
      console.log("abc", post);
      setPost(post);
    }, 500); // Force an update after 5s
  }, []);
  const updatePostHandle = () => {
    console.log("POSTTTTT", post);
    let send = {
      post: post,
      id: oldPost._id,
    };
    dispatch(updatePost(send, history));
    setPost(post);
  };

  return (
    <FrontEndLayout>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Edit Post</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link href="/customer/dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <form encType="multipart/form-data">
              <div className="form-group">
                {JSON.stringify(post)}
                <label htmlFor="post">Enter post here</label>
                <TextAreaFieldGroup
                  type="text"
                  className="form-control"
                  id="post"
                  name="post"
                  value={post}
                  onChange={({ target: { value } }) => setPost(value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="photos">Photos</label>
                <input
                  type="file"
                  multiple
                  className="form-control"
                  id="photos"
                  name="photos"
                  value={photos}
                  onChange={handlePhotosChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-sm btn-success"
                onClick={updatePostHandle}
              >
                Update
              </button>
            </form>
          </div>
        </section>
      </div>
    </FrontEndLayout>
  );
};

export default CustomerPostEdit;
