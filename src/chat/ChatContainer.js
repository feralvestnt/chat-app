import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ChatForm from "./ChatForm";
import { loadChat, save } from "./action/chatAction";
import PropTypes from "prop-types";
import SockJsClient from "react-stomp";

function ChatContainer({ loadChat, save, chatList, user, ...props }) {
  const [chat, setChat] = useState({ ...props.chat });

  useEffect(() => {
    setTimeout(() => {
      loadChat().catch(error => {
        alert("Loading chat failed " + error);
      });
    }, 300000);
  }, [props.chat]);

  function handleChange(event) {
    const { name, value } = event.target;
    setChat(prevChat => ({
      ...prevChat,
      [name]: value
    }));
  }

  function handleSave() {
    event.preventDefault();
    let newChat = { ...chat, user };

    this.clientRef.sendMessage("/topics/all", chat);

    save(newChat).catch(error => {
      alert("Saving chat failed " + error);
    });
  }

  return (
    <div>
      <SockJsClient
        url="http://localhost:8088/ws"
        topics={["/topics/all"]}
        onMessage={msg => {
          console.log(msg);
        }}
        ref={client => {
          this.clientRef = client;
        }}
      />
      <ChatForm
        onChange={handleChange}
        onSave={handleSave}
        chatList={chatList}
        chat={chat}
      />
    </div>
  );
}

ChatContainer.propTypes = {
  loadChat: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  chatList: PropTypes.array.isRequired,
  chat: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const chat = { text: "", user: {} };
  return {
    chat: chat,
    chatList: state.chat,
    user: state.user
  };
}

const mapDispatchToProps = { loadChat, save };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
