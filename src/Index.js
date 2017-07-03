/*eslint-disable import/default */
import 'babel-polyfill';
import React  from 'react';
import {render} from 'react-dom';
import {browserHistory,Router} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

 //możemy tutaj wstrzyknąć stan pocztkowy. Teraz mamy w reducerze
const store = configureStore();


render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes}/>
    </Provider>,
    document.getElementById('app')
);
