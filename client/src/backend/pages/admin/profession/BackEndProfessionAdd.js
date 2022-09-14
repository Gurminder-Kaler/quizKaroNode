// import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import BackEndLayout from "../../../layouts/BackEndLayout";
// import { addProfession } from "../../../../actions/profileActions";
// // import { toast } from 'react-toastify'
// import TextFieldGroup from "../../../../common/TextFieldGroup";

// class BackEndProfessionAdd extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       profession: "",
//       errors: "",
//     };
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }
//   UNSAFE_componentWillReceiveProps(nextProps) {
//     if (nextProps.errors) {
//       this.setState({ errors: nextProps.errors });
//     }
//   }
//   onSubmit(e) {
//     e.preventDefault();
//     const userData = {
//       profession: this.state.profession,
//     };
//     this.props.addProfession(userData);
//     this.setState({
//       ...this.state,
//       profession: "",
//     });
//   }
//   onChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }
//   render() {
//     const { profession } = this.state;
//     return (
//       <>
//         <div className="row">
//           <div className="col-12">
//             <div className="card">
//               <div className="card-body">
//                 <form noValidate onSubmit={this.onSubmit}>
//                   <div className="row">
//                     <div className="col-4">
//                       <TextFieldGroup
//                         placeholder="Enter Profession"
//                         onChange={this.onChange}
//                         value={profession ? profession : ""}
//                         type="text"
//                         name="profession"
//                       />
//                     </div>
//                     <div className="col-4 mt-2">
//                       <button
//                         type="submit"
//                         className="btn btn-info btn-sm text-white "
//                       >
//                         Add Item
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
// BackEndProfessionAdd.propTypes = {
//   errors: PropTypes.string.isRequired,
// };
// function mapStateToProps(state) {
//   return {
//     errors: state.errors ? state.errors : {},
//   };
// }

// export default connect(mapStateToProps, { addProfession })(
//   BackEndProfessionAdd
// );
