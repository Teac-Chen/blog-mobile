import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const TodoList = ({ todo, dispatch }) => (
  <ul>
    {todo.map(item => (
      <li
        key={item.id}
        onClick={() => dispatch({ type: 'TOGGLE_TODO', id: item.id })}
        style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
      >
        {item.text}
      </li>
    ))}
  </ul>
)

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  todo: state.todo,
})

export default connect(mapStateToProps)(TodoList)
