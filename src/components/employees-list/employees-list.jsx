import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

function EmployeesList({ data, onDelete, onToggleProp }) {
  const elements = data.map((item) => { // можно в пропс прокинуть i и использовать его как key
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle')) }
      />
    );
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}

export default EmployeesList;
