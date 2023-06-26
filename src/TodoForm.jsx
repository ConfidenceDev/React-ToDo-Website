import { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export function TodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleForm(e) {
    e.preventDefault();
    if (newItem === null) return;

    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleForm} className="new-item-form">
      <div className="form-row">
        <label htmlFor="todoField">New Todo</label>
        <input
          type="text"
          placeholder="Enter title"
          id="todoField"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
