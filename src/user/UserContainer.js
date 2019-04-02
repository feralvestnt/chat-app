import React, { useState } from "react";
import { connect } from "react-redux";
import UserForm from "./UserForm";
import { enterChat } from "./action/userAction";
import { getAllMessages } from "../chat/action/chatAction";
import PropTypes from "prop-types";

function UserContainer({ enterChat, getAllMessages, history, ...props }) {
  const [user, setUser] = useState({ ...props.user });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  }

  function handleEnterChat(event) {
    event.preventDefault();
    getAllMessages().catch(error => {
      alert("Loading messages failed " + error);
    });
    enterChat(user)
      .then(() => {
        history.push("/chat");
      })
      .catch(error => {
        alert("Entering chat failed " + error);
      });
  }

  return (
    <UserForm
      user={user}
      onChange={handleChange}
      onEnterChat={handleEnterChat}
    />
  );
}

UserContainer.propTypes = {
  enterChat: PropTypes.func.isRequired,
  getAllMessages: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

function mapStateToProps() {
  const user = { name: "", email: "" };
  return {
    user
  };
}

const mapDispatchToProps = {
  enterChat,
  getAllMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
