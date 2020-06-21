import React, { Component } from "react";
import "./Message.scss";

class Message extends Component {
  constructor(props) {
    super(props);
    let temp = JSON.parse(this.props.message);
    this.state = {
      message: temp
    };
    console.log(temp)
  }

  render() {
    return (
      <div className="container">
        <span>{this.state.message.id}</span>
        <span>{this.state.message.body}</span>
        <span>{this.state.message.created_at}</span>
      </div>

    )
  }
}

export default Message;