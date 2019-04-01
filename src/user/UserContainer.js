import React, { useState } from "react";
import { connect } from "react-redux";
import UserForm from "./UserForm";
import { enterChat } from "./action/userAction";
import PropTypes from "prop-types";

function UserContainer({ enterChat, history, ...props }) {
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
    enterChat(user).then(() => {
      history.push("/chat");
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
  enterChat
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
