export const  placeOrder = (cred, addToCart, auth  ) => {
    return (dispatch, getstate, { getFirestore}) =>{
        const firestore = getFirestore();
        let Delivery = true;
        if(cred.delivery === "Delivery") {
                 Delivery = true;
        } else{
              Delivery = false;
        }
        firestore.collection('Order').add({
           Accepted: false,          
           Delivery: Delivery,
           Place: cred.location,
           Price: addToCart.cartcost,
           Outlet: firestore.collection('Outlet').doc(addToCart.shopid),
           User: firestore.collection('Users').doc(auth.uid)
        }).then(()=> {
            dispatch({ type: 'ORDER_PLACED'});
        }).catch(err => {
            dispatch({ type: 'ORDER_ERROR', err });
         })
    }

}