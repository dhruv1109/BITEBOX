const initState = {
    
  }
  const orderReducer = (state = initState, action) => {
    switch(action.type){
      case 'ORDER_PLACED':
        console.log('order Placed');
        return {
          ...state,
        }
      case 'ORDER_ERROR':
        console.log('order not accepted');
        return {
          ...state,
        }
       
      default:
        return state
    }
  };
  
  export default orderReducer;