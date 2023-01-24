import './app-filter.css';

function AppFilter() {
  return (
    <div className="btn-group">
      <button
        className="btn btn-light"
        type="button"
      >
        Все сотрудники
      </button>
      <button
        className="btn btn-outline-light"
        type="button"
      >
        На повышение
      </button>
      <button
        className="btn btn-outline-light"
        type="button"
      >
        З/П
      </button>
    </div>
  );
}

export default AppFilter;
