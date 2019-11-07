import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EmployeeList from './EmployeeList';
import fetchEmployees from './fetchEmployees';
import { getEmployees, getEmployeesError, getEmployeesPending } from './reducer';

class App extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchEmployees } = this.props;
    fetchEmployees();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (this.pending === false) return false;
    // more tests
    return true;
  }

  render() {
    const { employees, error, pending } = this.props;

    if (!this.shouldComponentRender()) {
      return <div className="spinner-border"></div>
    }

    return (
      <div className='container'>
        {error && <span className='product-list-error'>{error}</span>}
        <EmployeeList employees={employees} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  employees: getEmployees(state),
  error: getEmployeesError(state),
  pending: getEmployeesPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchEmployees: fetchEmployees
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
