import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import reducer from './reducer';
import App from './components/App';
import { Provider } from 'react-redux';
// import { dec, inc, rnd } from './actions';!!!

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
// update();  // провайдер уже обеспечивает изменение нашего VirtualDOM
//subscribe(update); ///и обеспечивает изменение стейта в случае вызова dispatch
