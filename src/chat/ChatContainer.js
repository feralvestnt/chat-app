import React from "react";
import { connect } from "react-redux";
import ChatForm from "./ChatForm";
import { loadChat, save } from "./action/chatAction";
import PropTypes from "prop-types";
import SockJsClient from "react-stomp";
const baseUrl = process.env.API_URL;

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: { text: "" }
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    let chat = { ...this.state.chat, [name]: value };
    this.setState({
      chat
    });
  }

  handleSave() {
    event.preventDefault();
    let chat = this.state.chat;
    let user = this.props.user;
    let newChat = { ...chat, user };
    this.clientRef.sendMessage("/app/message", JSON.stringify(newChat));
  }

  onMessageReceive = msg => {
    this.props.loadChat(msg);
  };

  render() {
    const { chatList } = this.props;
    return (
      <div>
        <SockJsClient
          url={baseUrl + "/websocket/"}
          topics={["/queue/reply"]}
          onMessage={this.onMessageReceive}
          ref={client => {
            this.clientRef = client;
          }}
          onConnect={() => {
            console.log("Connected!");
          }}
          onDisconnect={console.log("Disconnected!")}
          debug={true}
        />

        <ChatForm
          onChange={this.handleChange.bind(this)}
          onSave={this.handleSave.bind(this)}
          chatList={chatList}
          chat={this.state.chat}
        />
      </div>
    );
  }
}

ChatContainer.propTypes = {
  loadChat: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  chatList: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    chatList: state.chat,
    user: state.user
  };
}

const mapDispatchToProps = { loadChat, save };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
