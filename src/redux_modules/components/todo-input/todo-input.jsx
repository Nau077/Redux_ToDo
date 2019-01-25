import React from 'react';
import PropTypes from 'prop-types';

import './todo-input.css';

const ToDoInput = ({ value, onChange, onKeyPress, onClickInput }) => (
  <div className="todo-input-wrapper">
   <span onClick={onClickInput} className="fas fa-plus" >+</span>
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
  onClickInput: PropTypes.func,

}

ToDoInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
  onClickInput: () => {},
}

export default ToDoInput;