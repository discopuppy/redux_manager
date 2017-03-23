import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginFrom from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDxsmWzJfb4J1vFOSBusodbxGu53o7nlYE',
            authDomain: 'manager-1c12e.firebaseapp.com',
            databaseURL: 'https://manager-1c12e.firebaseio.com',
            storageBucket: 'manager-1c12e.appspot.com',
            messagingSenderId: '845166167893'
    };

        firebase.initializeApp(config);

    }
    
    render() {
        return (
            <Provider store={createStore()}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
