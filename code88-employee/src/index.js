import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'font-awesome/css/font-awesome.min.css'
import EmployeeManagement from './components/EmployeeManagement';
import EmployeeStore from './stores/EmployeeStore';
import { Provider } from 'mobx-react';

const store = new EmployeeStore();

ReactDOM.render(
    <Provider store={store}>
        <EmployeeManagement />
    </Provider>,
    document.getElementById('root')
);
