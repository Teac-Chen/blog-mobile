export default (state = [], action) => {
  switch (action.type) {
    case 'INIT_ARTICLE': {
      return [...state]
    }
    default: {
      return state
    }
  }
}
