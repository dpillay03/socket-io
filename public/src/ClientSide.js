import React from 'react';
import io from 'socket.io-client'

const socket = io('http://localhost:3000');
socket.on('connect', () => {
    console.log('A client has been connected!');
});

class ClientSide extends React.Component {
        state = {
            totalMessages: []
        }

    componentDidMount(){
        socket.on('totalMessages', (data) => {
            console.log('Client got messages')
            this.setState({totalMessages: data.totalMessages});
        })
    }

    sendMessage = (e) => {
        e.preventDefault();;
        console.log('Message: ', e.target.msg.value)
        if(e.target.msg.value){
            socket.emit('send-message', e.target.msg.value);
        }
        e.target.reset();
    }

    render() {
        return <React.Fragment>
            <form onSubmit={this.sendMessage}>
                <h4>Write a message and chat away!</h4>
                <input type="text" name="msg" placeholder="Message..."></input>
                <button type="submit">SEND</button>
            </form>

            <div className="messages">
                <h3>Messages</h3>
                <ul>
                    {this.state.totalMessages.map((msg, index) => {
                        return <li key={index}>{msg}</li>
                    })}
                </ul>
            </div>
        </React.Fragment>
    }
}

export default ClientSide