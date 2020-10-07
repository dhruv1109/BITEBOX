const initState = {
  authError: null
}
const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state
    case 'SIGNIN_SUCCESS' :
      console.log("Sign up success");
      return {
        ...state,
        authError: null
      }  
     case 'SIGNIN_ERROR' :
       console.log("SIGNIN ERROR");
       return {
         ...state,
         authError: action.err.message
       } 
    default:
      return state
  }
};

export default authReducer;