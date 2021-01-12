import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  render() {
    return (
      <div className="card my-5 text-center" style={{ 'max-width': '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://source.unsplash.com/random/350x350"
              alt="new"
              className="img-thumbnail m-2"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {this.state.employee.firstName} {this.state.employee.lastName}
              </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small class="text-muted">{this.state.employee.emailId}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployee;
