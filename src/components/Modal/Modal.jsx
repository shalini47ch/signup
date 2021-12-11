import React from "react";
import Input from "../Input/Input";
import "./Modal.css";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
 import {RiLockPasswordFill} from "react-icons/ri"
 
class Modal extends React.Component {
  render() {
    return (
      <div className="form-elements">
        <form onSubmit={this.props.onSubmit} className="modal-form">
          <div className="icon-style">
            <FaUserCircle color="grey" />
            <Input id="name" type="text" placeholder="Jack Willson" />
          </div>
          <div className="icon-style">
            <MdEmail color="grey"/>
            <Input
              id="username"
              type="email"
              placeholder="wilsonjack@gmail.com"
            />
          </div>
          <div className="icon-style">
            <RiLockPasswordFill color="grey"/>
          <Input id="password" type="password" placeholder="password" />
          </div>
          <button className="login-button">Login</button>
        </form>
      </div>
    );
  }
}
export default Modal;
