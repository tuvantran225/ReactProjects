import { ActionTypes } from "./ActionTypes";

export function fetchEmployeesPending() {
    return {
        type: ActionTypes.FETCH_EMPLOYEES_PENDING
    };
}

export function fetchEmployeesSuccess(employees) {
    return {
        type: ActionTypes.FETCH_EMPLOYEES_SUCCESS,
        employees: employees
    };
}

export function fetchEmployeesError(message) {
    return {
        type: ActionTypes.FETCH_EMPLOYEES_ERROR,
        message: message
    };
}