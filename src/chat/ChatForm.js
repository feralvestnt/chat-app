import React from "react";
import PropTypes from "prop-types";
import TextInput from "../components/common/TextInput";

const style = {
  height: 400,
  overflow: "auto",
  border: "1px solid #ccc"
};

class ChatForm extends React.Component {
  render() {
    const { chat, chatList, onSave, loading = false, onChange } = this.props;
    return (
      <div>
        <div style={style}>
          {chatList.map(chat => {
            return (
              <div key={chat.id} className="list-group">
                <a
                  href="#"
                  className="list-group-item list-group-item-action flex-column align-items-start"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{chat.user.name}</h5>
                    <small>-</small>
                  </div>
                  <p className="mb-1">{chat.text}</p>
                </a>
              </div>
            );
          })}
        </div>

        <form onSubmit={onSave}>
          <TextInput
            name="text"
            label=""
            value={chat.text}
            onChange={event => onChange(event)}
          />
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary float-right"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    );
  }
}

ChatForm.propTypes = {
  chat: PropTypes.object,
  user: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  chatList: PropTypes.array.isRequired,
  loading: PropTypes.bool
};

export default ChatForm;
