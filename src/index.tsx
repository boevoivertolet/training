import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AllCounters} from './AllCounters';
import {AllCountersRedux} from './Redux/AllCountersRedux';
import {Provider} from 'react-redux';
import {store} from './Redux/CounterStore';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AllCounters/>
        <hr/>
        <span>Redux</span>
        <Provider store={store}>
            <AllCountersRedux/>
        </Provider>

    </React.StrictMode>
);


reportWebVitals();
