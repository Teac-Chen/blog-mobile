export default (state = [], action) => {
  switch (action.type) {
    case 'INIT_ARTICLE': {
      return [...action.list]
    }
    default: {
      return state
    }
  }
}
