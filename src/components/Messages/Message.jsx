import React, {Component} from 'react';

class Message extends Component {

  render(){
    const {message} = this.props;
    return(
      <div className="message">
        {this.formatTime(message.timeStamp)}
        <strong>{"Nickname "}</strong>
        {message.text}
      </div>
    )
  }

  formatTime(timestamp){
    const dt = new Date(timestamp);
    const hours = dt.getHours();
    const minutes = dt.getMinutes();
    const seconds = dt.getSeconds();

    const formatedTime = (time) => {
     return (time < 10) ? `0${time}` : time;
    }

    return `[${formatedTime(hours)}:${formatedTime(minutes)}:${formatedTime(seconds)}] `
  }
}

export default Message;
