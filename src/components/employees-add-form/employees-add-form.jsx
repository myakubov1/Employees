import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      validate: '', //ДОБАВИЛ ПРОПС ДЛЯ СТИЛЯ (стиль создал)

    };
  }

  onValueChange = (e) => {

    this.setState(() => {
      return {
        [e.target.name]: e.target.value,
      }
    });
    
  };
  
  onSubmitEmployee = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) {
      this.setState(()=>{
         return { validate:'deny'}
      })
    } else {
      this.setState(() => {
        return {
          name: '',
          salary: '',
          validate: ''
        }
      })
      this.props.onAdd(this.state.name, this.state.salary)
    };
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
