import React, { Component } from 'react';
import { FORM_TYPE } from '../../../constants/Constant';

class EmployeeForm extends Component {

    changeValue = (event) => {
        this.props.changeValue(event, FORM_TYPE.MANIPULATE);
    }

    createEmployee = () => {
        this.props.createEmployee();
    }

    render() {
        const { englishName, vietnameseName, department, gender, discription, status, manager } = this.props.employee;
        return (
            <div className="modal fade" id="employee-form" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create New Employee</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="form-group col-md-3">
                                        <label>English Name</label>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            name="englishName"
                                            value={englishName}
                                            onChange={this.changeValue} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>Vietnamese Name</label>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            name="vietnameseName"
                                            value={vietnameseName}
                                            onChange={this.changeValue} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>Department</label>
                                        <select 
                                            className="form-control" 
                                            name="department"
                                            value={department}
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
                                            value={gender}
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
                                        value={discription}
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
                                                    checked={status === 'ACTIVE'} />
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
                                                    checked={status === 'INACTIVE'} />
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
                                                checked={manager} />
                                                Manager
                                        </label>
                                    </div>
                                </div>    
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.createEmployee}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeForm;
