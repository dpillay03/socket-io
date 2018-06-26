import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import ClientSide from './ClientSide.js'

// import io from 'socket.io-client'

// const socket = io('http://localhost:3000');
// socket.on('connect', () => {
//     console.log('A client has been connected!');
// });

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <React.Fragment>
            <h1>Messenger App</h1>
            <ClientSide />
        </React.Fragment>
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);