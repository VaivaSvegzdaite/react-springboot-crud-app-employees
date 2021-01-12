import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import Pagination from 'react-js-pagination';

class ListEmployees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      activePage: 1,
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }

  addEmployee() {
    this.props.history.push('/add-employee/_add');
  }

  editEmployee(id) {
    this.props.history.push(`/update-employee/${id}`);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <div>
        <h2 className="text-center mt-5">Employees List</h2>
        <div className="row">
          <button className="btn btn-dark" onClick={this.addEmployee}>
            {' '}
            Add Employee
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Employee First Name</th>
                <th> Employee Last Name</th>
                <th> Employee Email Id</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td> {employee.firstName} </td>
                  <td> {employee.lastName}</td>
                  <td> {employee.emailId}</td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-warning"
                    >
                      Update{' '}
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger"
                    >
                      Delete{' '}
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => this.viewEmployee(employee.id)}
                      className="btn btn-success"
                    >
                      View{' '}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={1}
            totalItemsCount={10}
            pageRangeDisplayed={3}
            onChange={this.handlePageChange.bind(this)}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div>
    );
  }
}

export default ListEmployees;
