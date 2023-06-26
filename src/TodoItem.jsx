import PropTypes from "prop-types";

TodoItem.propTypes = {
  completed: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
