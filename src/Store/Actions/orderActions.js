export const  placeOrder = (cred, addToCart, auth, OrderID  ) => {
  
    return (dispatch, getstate, { getFirestore}) =>{
        const firestore = getFirestore();
        let Delivery = true;
        if(cred.delivery === "Delivery") {
                 Delivery = true;
        } else{
              Delivery = false;
        }
        let order = "";
        let i = 0 ;
        for( i = 0 ; i< addToCart.cartnumber ; i++ ){
             order= order + addToCart.cartItems[i].Name  + ",";
        }
        console.log(order);
firestore.collection('Order').doc(OrderID).set({
           Accepted: false,          
           Delivery: Delivery,
           Place: cred.location,
           OrderTime: new Date(),
           Price: addToCart.cartcost,
           Items: addToCart.cartItems,
           Outlet: firestore.collection('Outlet').doc(addToCart.shopid),
           User: firestore.collection('Users').doc(auth.uid)
        }).then(()=> {
              dispatch({ type: 'ORDER_PLACED'});
           
        }).catch(err => {
            dispatch({ type: 'ORDER_ERROR', err });
         });
       
         firestore.collection('Users').doc(auth.uid).collection('orders').doc(OrderID).set({
           reference: firestore.collection('Order').doc(OrderID),
           Price: addToCart.cartcost, 
           Items: order,
           OrderTime: new Date(),
           ShopName: addToCart.shop,
           Outlet: firestore.collection('Outlet').doc(addToCart.shopid),
         })
         firestore.collection("Outlet").doc(addToCart.shopid).collection('orders').doc(OrderID).set({
          reference: firestore.collection('Order').doc(OrderID),
          user: firestore.collection('Users').doc(auth.uid),
          Price: addToCart.cartcost,
          Items: order,
          OrderTime: new Date(),
          New: true
         })
         
    }

}