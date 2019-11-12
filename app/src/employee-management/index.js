import React, { Component } from 'react';
import './index.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <form role="form">
                    <h2>Registration</h2>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label htmlFor="firstName" className="col-md-12 control-label">First Name</label>
                            <div className="col-md-12">
                                <input type="text" id="firstName" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="lastName" className="col-md-12 control-label">Last Name</label>
                            <div className="col-md-12">
                                <input type="text" id="lastName" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="email" className="col-md-12 control-label">Email* </label>
                            <div className="col-md-12">
                                <input type="email" id="email" className="form-control" name="email" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label htmlFor="birthDate" className="col-md-12 control-label">Date of Birth*</label>
                            <div className="col-md-12">
                                <input type="date" id="birthDate" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="phoneNumber" className="col-md-12 control-label">Phone number </label>
                            <div className="col-sm-12">
                                <input type="phoneNumber" id="phoneNumber" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="control-label col-md-12">Gender</label>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="radio-inline">
                                            <input type="radio" id="femaleRadio" defaultValue="Female" />Female
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="radio-inline">
                                            <input type="radio" id="maleRadio" defaultValue="Male" />Male
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row col-md-4">
                        <button type="submit" className="btn btn-primary btn-block">Search</button>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="main-box no-header clearfix">
                          <div className="main-box-body clearfix">
                            <div className="table-responsive">
                              <table className="table user-list">
                                <thead>
                                  <tr>
                                    <th><span>User</span></th>
                                    <th><span>Created</span></th>
                                    <th className="text-center"><span>Status</span></th>
                                    <th><span>Email</span></th>
                                    <th>&nbsp;</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" />
                                      <a href="#" className="user-link">Full name 1</a>
                                      <span className="user-subhead">Member</span>
                                    </td>
                                    <td>2013/08/12</td>
                                    <td className="text-center">
                                      <span className="badge badge-warning">Pending</span>
                                    </td>
                                    <td>
                                      <a href="#">marlon@brando.com</a>
                                    </td>
                                    <td style={{width: '20%'}}>
                                      <a href="#" className="table-link">
                                        <span className="fa-stack">
                                          <i className="fa fa-square fa-stack-2x" />
                                          <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                                        </span>
                                      </a>
                                      <a href="#" className="table-link">
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
                                  <tr>
                                    <td>
                                      <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" />
                                      <a href="#" className="user-link">Full name 2</a>
                                      <span className="user-subhead">Admin</span>
                                    </td>
                                    <td>2013/08/12</td>
                                    <td className="text-center">
                                      <span className="badge badge-success">Active</span>
                                    </td>
                                    <td>
                                      <a href="#">marlon@brando.com</a>
                                    </td>
                                    <td style={{width: '20%'}}>
                                      <a href="#" className="table-link">
                                        <span className="fa-stack">
                                          <i className="fa fa-square fa-stack-2x" />
                                          <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                                        </span>
                                      </a>
                                      <a href="#" className="table-link">
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
                                  <tr>
                                    <td>
                                      <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" />
                                      <a href="#" className="user-link">Full name 3</a>
                                      <span className="user-subhead">Member</span>
                                    </td>
                                    <td>2013/08/12</td>
                                    <td className="text-center">
                                      <span className="badge badge-danger">Inactive</span>
                                    </td>
                                    <td>
                                      <a href="#">marlon@brando.com</a>
                                    </td>
                                    <td style={{width: '20%'}}>
                                      <a href="#" className="table-link">
                                        <span className="fa-stack">
                                          <i className="fa fa-square fa-stack-2x" />
                                          <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                                        </span>
                                      </a>
                                      <a href="#" className="table-link">
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
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default App;