import React, {Component} from 'react';

class Message extends Component {

  render(){
    const {message} = this.props;
    return(
      <div className="message">
        {this.formatTime(message.timeStamp)}
        <strong>{message.user}</strong>
        {': '}
        {message.text}
      </div>
    )
  }

  formatTime(timestamp){
    const dt = new Date(timestamp);
    const hours = dt.getHours();
    const minutes = dt.getMinutes();
    const seconds = dt.getSeconds();

    const formattedTime = (time) => {
     return (time < 10) ? `0${time}` : time;
    }

    return `[${formattedTime(hours)}:${formattedTime(minutes)}:${formattedTime(seconds)}] `
  }
}

export default Message;
