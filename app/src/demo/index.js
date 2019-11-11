import React, { Component } from 'react';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            discription: '',
            gender: 'FEMALE',
            language: 'en',
            status: true
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
                <div className="card">
                    <div className="card-header">Form</div>
                        <div className="card-body">
                            <form onSubmit={this.submitForm}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.changeValue} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                        className="form-control" 
                                        type="password" 
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.changeValue} />
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
                                <div className="form-group">
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input 
                                                type="radio" 
                                                className="form-check-input" 
                                                name="language"
                                                value="en" 
                                                onChange={this.changeValue}
                                                checked={this.state.language === 'en'} />English
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input 
                                                type="radio" 
                                                className="form-check-input" 
                                                name="language"
                                                value="vi" 
                                                onChange={this.changeValue}
                                                checked={this.state.language === 'vi'} />Vietnamese
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input 
                                                type="checkbox" 
                                                className="form-check-input" 
                                                name="status"
                                                onChange={this.changeValue}
                                                checked={this.state.status} />Status
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary" type="submit">Save</button>&nbsp;
                                <button className="btn btn-secondary" type="reset">Clear</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;