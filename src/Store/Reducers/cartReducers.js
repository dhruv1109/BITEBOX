const initialState = {
  cartnumber : 0,
  cartcost: 0,
  cartItems : [],
  shop : {},
  shopid:'DC96133LEvRXCGUjdf8Rt7vLwXJ2',
};
 
const cartReducer = (state = initialState, action) => {
    
 
    switch(action.type) {
 
        case 'ADD_TO_CART':
           let Items = action.payload;
           let shopDetails = action.shop;
           let cost = state.cartcost + Items.Price;
           let new_items = state.cartItems.filter(item=> action.payload === item)
           if(state.shopid === action.id){
           return {
             ...state,
             cartnumber: state.cartnumber + 1,
             cartItems: [...state.cartItems, { ...Items }],
             cartcost: cost,
             shop: shopDetails,
             shopid: action.id
               } }
              else{
                return{
                  ...state,
                  cartcost: 0,
                  cartItems: new_items,
                  cartnumber: 0,
                  shop: shopDetails,
                  shopid: action.id
                }
              }                
           case 'REMOVE_ITEM' :
            let new_item = state.cartItems.filter(item=> action.payload !== item)
            let newTotal = state.cartcost - action.payload.Price
            console.log(newTotal)
            if(state.cartnumber>0){
           return {
               ...state,
               cartItems: new_item,
               cartcost: newTotal,
               cartnumber: state.cartnumber - 1,
               shopid: action.id
           }} else{
             return{
              ...state,
              cartnumber: 0,
              shopid: action.id
             }

           }

        default:
            return state;
    }
};
 
export default cartReducer;