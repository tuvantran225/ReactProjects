import React, { Component } from 'react';
import { FORM_TYPE } from '../../../constants/Constant';

class EmployeeFilter extends Component {

    changeValue = (event) => {
        this.props.changeValue(event, FORM_TYPE.SEARCH);
    }

    searchEmployee = () => {
        this.props.searchEmployee();
    }

  render() {
    const { englishName, vietnameseName, department, gender, discription, status, manager } = this.props.employee;
    return (
        <form>
            <div className="row">
                <div className="form-group col-md-3">
                    <label>English Name</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        name="englishName"
                        value={englishName}
                        onChange={this.changeValue}
                    />
                </div>
                <div className="form-group col-md-3">
                    <label>Vietnamese Name</label>
                    <input 
                        className="form-control" 
                        type="text"
                        name="vietnameseName"
                        value={vietnameseName}
                        onChange={this.changeValue}
                    />
                </div>
                <div className="form-group col-md-3">
                    <label>Department</label>
                    <select 
                        className="form-control" 
                        name="department"
                        value={department}
                        onChange={this.changeValue}
                    >
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
                        value={gender}
                        onChange={this.changeValue}
                    >
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
                    value={discription}
                    onChange={this.changeValue}
                />
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
                                checked={status === 'ACTIVE'}
                                onChange={this.changeValue}
                            />
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
                                checked={status === 'INACTIVE'}
                                onChange={this.changeValue}
                            />
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
                            checked={manager}
                            onChange={this.changeValue}
                        />
                            Manager
                    </label>
                </div>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" type="button" onClick={this.searchEmployee()}>Search</button>&nbsp;
                <button className="btn btn-success" type="button" data-toggle="modal" data-target="#employee-form">Create</button>
            </div>
        </form>
    );
  }
}

export default EmployeeFilter;
