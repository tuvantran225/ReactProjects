import React, { Component } from 'react';
import './App.css'

const employees = [
  {
    englishName: "Frank",
    vietnameseName: "Tú",
    department: "DEV",
    gender: 'MALE',
    discription: '',
    status: 'ACTIVE',
    manager: false
  },
  {
    englishName: "Jeff",
    vietnameseName: "Khánh",
    department: "DEV",
    gender: 'MALE',
    discription: '',
    status: 'INACTIVE',
    manager: false
  },
  {
    englishName: "Patrik",
    vietnameseName: "Thái",
    department: "DEV",
    gender: 'MALE',
    discription: '',
    status: 'ACTIVE',
    manager: false
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        englishName: '',
        vietnameseName: '',
        department: 'DEV',
        gender: 'FEMALE',
        discription: '',
        status: 'ACTIVE',
        manager: true
    };
  }

  changeValue = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
        [name]: value
    });
  }

  submitForm = (event) => {
      event.preventDefault();
      console.log(this.state);
  }

  render() {
    const body = employees.map((employee, index) => {
      return (
        <tr key={index}>
        <td>{index + 1}</td>
        <td>{employee.englishName}</td>
        <td>{employee.vietnameseName}</td>
        <td className="text-center">{employee.department}</td>
        <td className="text-center">{employee.gender}</td>
        <td className="text-center">
          <span className="badge badge-success">{employee.status}</span>
        </td>
        <td className="text-center">
          <a href="#" className="table-link info">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
              </span>
            </a>
            <a href="#" className="table-link warning">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-pencil fa-stack-1x fa-inverse" />
              </span>
            </a>
            <a href="#" className="table-link danger">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
              </span>
            </a>
        </td>
    </tr> 
      );
    });
    return (
      <div className="container">
          <div className="row">
              <div className="card w-100">
                  <div className="card-header">
                      <h3 className="text-center">Code88 Employees</h3>
                  </div>
                  <div className="card-body">
                      <form onSubmit={this.submitForm}>
                          <div className="row">
                              <div className="form-group col-md-3">
                                  <label>English Name</label>
                                  <input 
                                      className="form-control" 
                                      type="text" 
                                      name="englishName"
                                      value={this.state.englishName}
                                      onChange={this.changeValue} />
                              </div>
                              <div className="form-group col-md-3">
                                  <label>Vietnamese Name</label>
                                  <input 
                                      className="form-control" 
                                      type="text" 
                                      name="vietnameseName"
                                      value={this.state.vietnameseName}
                                      onChange={this.changeValue} />
                              </div>
                              <div className="form-group col-md-3">
                                  <label>Department</label>
                                  <select 
                                      className="form-control" 
                                      name="department"
                                      value={this.state.department}
                                      onChange={this.changeValue}>
                                      <option value="DEV">Developer</option>
                                      <option value="QA">QA</option>
                                      <option value="SA">SA</option>
                                      <option value="IT">IT</option>
                                      <option value="HR">HR</option>
                                  </select>
                              </div>
                              <div className="form-group col-md-3">
                                  <label>Gender</label>
                                  <select 
                                      className="form-control" 
                                      name="gender"
                                      value={this.state.gender}
                                      onChange={this.changeValue}>
                                      <option value="MALE">Male</option>
                                      <option value="FEMALE">Female</option>
                                  </select>
                              </div>
                          </div>
                          <div className="form-group">
                              <label>Discription</label>
                              <textarea 
                                  className="form-control" 
                                  name="discription"
                                  value={this.state.discription}
                                  onChange={this.changeValue} />
                          </div>
                          <div className="form-group">
                              <label>Status</label>
                              <div>
                                  <div className="form-check-inline">
                                      <label className="form-check-label">
                                          <input 
                                              type="radio" 
                                              className="form-check-input" 
                                              name="status"
                                              value="ACTIVE" 
                                              onChange={this.changeValue}
                                              checked={this.state.status === 'ACTIVE'} />
                                              Active
                                      </label>
                                  </div>
                                  <div className="form-check-inline">
                                      <label className="form-check-label">
                                          <input 
                                              type="radio" 
                                              className="form-check-input" 
                                              name="status"
                                              value="INACTIVE" 
                                              onChange={this.changeValue}
                                              checked={this.state.status === 'INACTIVE'} />
                                              Inactive
                                      </label>
                                  </div>
                              </div>
                          </div>
                          <div className="form-group">
                              <div className="form-check-inline">
                                  <label className="form-check-label">
                                      <input 
                                          type="checkbox" 
                                          className="form-check-input" 
                                          name="manager"
                                          onChange={this.changeValue}
                                          checked={this.state.manager} />
                                          Manager
                                  </label>
                              </div>
                          </div>
                          <div className="form-group">
                              <button className="btn btn-primary" type="submit">Save</button>&nbsp;
                              <button className="btn btn-secondary" type="reset">Clear</button>
                          </div>
                      </form>
                      <table className="table table-bordered">
                          <thead>
                              <tr>
                                  <th>#</th>
                                  <th>English Name</th>
                                  <th>Vietnamese Name</th>
                                  <th className="text-center">Department</th>
                                  <th className="text-center">Gender</th>
                                  <th className="text-center">Status</th>
                                  <th className="text-center">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                            {body}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
