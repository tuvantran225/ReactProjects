import { ActionTypes } from "./ActionTypes";
import initialState from './initialState';

export function employeesReducer(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.FETCH_EMPLOYEES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case ActionTypes.FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                pending: false,
                employees: action.employees
            }
        case ActionTypes.FETCH_EMPLOYEES_ERROR:
            return {
                ...state,
                pending: false,
                message: action.message
            }
        default: 
            return state;
    }
}

export const getEmployees = state => state.employees;
export const getEmployeesPending = state => state.pending;
export const getEmployeesError = state => state.error;