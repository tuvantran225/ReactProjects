import { fetchEmployeesPending, fetchEmployeesSuccess, fetchEmployeesError } from "./action";

function fetchEmployees() {
    return dispatch => {
        dispatch(fetchEmployeesPending());
        fetch('http://localhost:8080/employees')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchEmployeesSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchEmployeesError(error));
        })
    }
}

export default fetchEmployees;