import React from 'react';

const EmployeeList = (props) => {
    return (
        <table className="table table-dark">
          <tbody>
            {props.employees && props.employees.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.company}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    );
}

export default EmployeeList;