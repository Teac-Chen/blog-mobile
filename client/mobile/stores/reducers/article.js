export default (state = {
  cur: '',
  list: [],
}, action) => {
  switch (action.type) {
    case 'INIT_ARTICLE': {
      return {
        ...state,
        list: [...action.list],
      }
    }
    case 'CUR_ARTICLE': {
      return {
        ...state,
        cur: action.article,
      }
    }
    default: {
      return state
    }
  }
}
