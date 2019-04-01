import React from "react";
import PropTypes from "prop-types";
import TextInput from "../components/common/TextInput";

const style = {
  padding: 15,
  border: "1px solid #ccc",
  height: 245
};

const UserForm = ({ user, onEnterChat, onChange, loading = false }) => {
  return (
    <div style={style}>
      <form onSubmit={onEnterChat}>
        <TextInput
          name="name"
          label="Name"
          value={user.name}
          onChange={onChange}
        />
        <TextInput
          name="email"
          label="Email"
          value={user.email}
          onChange={onChange}
        />
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary float-right"
        >
          {loading ? "Entering..." : "Enter Chat"}
        </button>
      </form>
    </div>
  );
};

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onEnterChat: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

export default UserForm;
