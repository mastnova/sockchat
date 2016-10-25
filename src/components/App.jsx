import React, {Component} from 'react';
import io from 'socket.io-client';
import MessageList from './Messages/MessageList.jsx';
import MessageForm from './Messages/MessageForm.jsx';
import UserList from './Users/UserList.jsx';
import UserForm from './Users/UserForm.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'disconnected'
    }
  }

  componentWillMount(){
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect.bind(this));
  }

  connect(){
    this.setState({'status': 'connected'});
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-4">
          <UserList />
        </div>
        <div className="col-md-8">
          <MessageList />
          <MessageForm />
        </div>
      </div>
    )
  }
}

export default App;
