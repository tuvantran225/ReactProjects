import React, { Component } from 'react';
import './index.css';

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
            manager: false
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
                                        <th>Department</th>
                                        <th>Gender</th>
                                        <th>National</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Frank</td>
                                        <td>Tú</td>
                                        <td>Dev</td>
                                        <td>Dev</td>
                                        <td>Dev</td>
                                        <td>Dev</td>
                                        <td>Dev</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jeff</td>
                                        <td>Tú</td>
                                        <td>Dev</td>
                                        <td>Dev</td>
                                        <td>Dev</td>
                                        <td>Dev</td>
                                        <td>Dev</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Patrik</td>
                                        <td>Tú</td>
                                        <td>Dev</td>
                                        <td>Dev</td>
                                        <td>Dev</td>
                                        <td>Dev</td>
                                        <td>Dev</td>
                                    </tr>
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