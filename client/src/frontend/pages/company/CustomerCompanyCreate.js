import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {
  addCompany,
  getAllCompanyParentCategories,
  getAllCompanyCategoriesViaParentId,
} from "../../../actions/companyActions";
import FrontEndLayout from "../../layouts/FrontEndLayout";
import TextAreaFieldGroup from "../../../common/TextAreaFieldGroup";
import TextFieldGroup from "../../../common/TextFieldGroup";
import SelectListGroup from "../../../common/SelectListGroup";

const CustomerCompanyCreate = (props) => {
  console.log("props", props);

  const dispatch = useDispatch();
  let history = useHistory();
  const authUser = useSelector((state) => state.auth.user);
  console.log("authUser", authUser);
  let [name, setName] = useState("");
  let [about, setAbout] = useState("");
  let [image, setImage] = useState("");
  let [coverImage, setCoverImage] = useState("");
  let [category, setCategory] = useState("");
  let [subCategory, setSubCategory] = useState("");
  let [status, setStatus] = useState("");
  useEffect(() => {
    dispatch(getAllCompanyParentCategories());
  }, []);

  useEffect(() => {
    console.log("category123", category);
    dispatch(getAllCompanyCategoriesViaParentId(category));
    // component DID Mount
  }, [category]);
  let categoryOptions = useSelector(
    (state) => state.company.companyParentCategories
  );
  let subCategoryOptions = useSelector(
    (state) => state.company.companySubCategories
  );
  console.log("ccc", categoryOptions);

  const handleInputChange = (e) => {
    console.log("object", e.target);
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    if (name === "name") {
      return setName(value);
    }

    if (name === "about") {
      return setAbout(value);
    }

    if (name === "image") {
      return setImage(value);
    }

    if (name === "coverImage") {
      return setCoverImage(value);
    }

    if (name === "category") {
      return setCategory(value);
    }

    if (name === "subCategory") {
      return setSubCategory(value);
    }

    if (name === "status") {
      return setStatus(value);
    }
  };

  const addPostHandle = () => {
    let send = {
      name: name,
      about: about,
      image: image,
      coverImage: coverImage,
      category: category,
      status: status,
    };
    dispatch(addCompany(send, history));
  };

  return (
    <FrontEndLayout>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Your Companies</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to={"/customer/dashboard"}>Home</Link>
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
                <label htmlFor="about">
                  Enter name<span className="text-danger">*</span>
                </label>
                <TextFieldGroup
                  type="text"
                  className="form-control"
                  id="about"
                  name="about"
                  onChange={handleInputChange}
                />
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="about">
                      Select Parent Category
                      <span className="text-danger">*</span>
                    </label>

                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        name="category"
                        id="category"
                        onChange={handleInputChange}
                      >
                        <option value="0" selected disabled>
                          Select Parent Category
                        </option>
                        {categoryOptions &&
                          categoryOptions.length > 0 &&
                          categoryOptions.map((option) => (
                            <option key={option._id} value={option._id}>
                              {option.category}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <label htmlFor="about">
                      Select Child Category
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-control form-control-lg"
                      name="subCategory"
                      id="subCategory"
                      onChange={handleInputChange}
                    >
                      <option value="0" selected disabled>
                        Select Child Category
                      </option>
                      {subCategoryOptions &&
                        subCategoryOptions.length > 0 &&
                        subCategoryOptions.map((option) => (
                          <option key={option._id} value={option._id}>
                            {option.category}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <label htmlFor="about">Enter details about the company</label>
                <TextAreaFieldGroup
                  type="text"
                  className="form-control"
                  id="about"
                  name="about"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="coverImage">Cover Image</label>
                <input
                  type="file"
                  multiple
                  className="form-control"
                  id="coverImage"
                  name="coverImage"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  multiple
                  className="form-control"
                  id="image"
                  name="image"
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-sm btn-success"
                onClick={addPostHandle}
              >
                Add
              </button>
            </form>
          </div>
        </section>
      </div>
    </FrontEndLayout>
  );
};

export default CustomerCompanyCreate;
