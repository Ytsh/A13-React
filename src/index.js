import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { App1 } from './App1';
import { AuthProvider } from './auth/AuthContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CounterUsingRedux from './components/CounterUsingRedux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AuthProvider>
            <BrowserRouter>
            {/* <CounterUsingRedux /> */}
                <App1 />
                {/* <App/> */}
            </BrowserRouter>
        </AuthProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
