export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SCROLL': {
      return action.state
    }
    default: {
      return state
    }
  }
}
