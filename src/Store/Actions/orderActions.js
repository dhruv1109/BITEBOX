export const  placeOrder = (cred, addToCart, auth, OrderID  ) => {
  
    return (dispatch, getstate, { getFirestore}) =>{
        const firestore = getFirestore();
        let Delivery = true;
        if(cred.delivery === "Delivery") {
                 Delivery = true;
        } else{
              Delivery = false;
        }
firestore.collection('Order').doc(OrderID).set({
           Accepted: false,          
           Delivery: Delivery,
           Place: cred.location,
           OrderTime: new Date(),
           Price: addToCart.cartcost,
           Outlet: firestore.collection('Outlet').doc(addToCart.shopid),
           User: firestore.collection('Users').doc(auth.uid)
        }).then(()=> {
            for(var i= 1; i< addToCart.cartnumber; i++){
                firestore.collection('Order').doc(OrderID).collection('Item').set({
                   Name: addToCart.cartItems[i].Name,
                   Price: addToCart.cartItems[i].Price,
                   reference: firestore.collection('Outlet').doc(addToCart.shopid).collection('Menu').doc(addToCart.cartItems.id)
         });
         if (i > 0) {
            if (addToCart.cartItems[0].Name === addToCart.cartItems[i].Name) {
              break;
            }
          }
     }
            dispatch({ type: 'ORDER_PLACED'});
           
        }).catch(err => {
            dispatch({ type: 'ORDER_ERROR', err });
         });
 
        
         firestore.collection('Users').doc(auth.uid).collection('orders').doc(OrderID).set({
           reference: firestore.collection('Order').doc(OrderID),
           Price: addToCart.cartcost, 
           OrderTime: new Date(),
         })
         firestore.collection("Outlet").doc(addToCart.shopid).collection('orders').doc(OrderID).set({
          reference: firestore.collection('Order').doc(OrderID),
          user: firestore.collection('Users').doc(auth.uid),
          Price: addToCart.cartcost,
          OrderTime: new Date(),
          New: true
         })
    }

}