import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      validate: '',
    };
  }

  onValueChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  onSubmitEmployee = (e) => {
    const { onAdd } = this.props;
    const { name, salary } = this.state;
    e.preventDefault();
    if (name.length < 3 || !salary) {
      this.setState(() => ({ validate: 'deny' }));
    } else {
      onAdd(name, salary);
      this.setState(() => ({
        name: '',
        salary: '',
        validate: '',
      }));
    }
  };

  render() {
    const { name, salary, validate } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.onSubmitEmployee}
        >
          <input
            onChange={this.onValueChange}
            type="text"
            className={`form-control new-post-label ${validate}`}
            placeholder="Как его зовут?"
            name="name"
            value={name}
          />
          <input
            onChange={this.onValueChange}
            type="number"
            className={`form-control new-post-label ${validate}`}
            placeholder="З/П в $?"
            name="salary"
            value={salary}
          />
          <button
            type="submit"
            className="btn btn-outline-light"
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}
export default EmployeesAddForm;
