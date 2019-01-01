export default (state = {
  isLogin: false,
  token: '',
}, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        isLogin: true,
        token: action.token,
      }
    }
    default: {
      return state
    }
  }
}
