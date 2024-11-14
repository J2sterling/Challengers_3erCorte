import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/slice/store';
import './index.css'
import App from './components/App';
import { startGoogleSignIn } from './store/slice/auth/thunks';


const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}


document.getElementById("google-login-btn").addEventListener("click", () => {
 
    store.dispatch(startGoogleSignIn());
});
