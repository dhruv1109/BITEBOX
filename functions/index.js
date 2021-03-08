const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const createNotifications = ( notification =>{
    return admin.firestore.collection('notifications')
    .add(notifications)
    .then(doc => console.log('notification added', doc));
})

exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
 });

exports.orderAccepted = functions.firestore.document('Users/{auth.uid}/orders/{OrderID}').onCreate(
    doc=> {
    const order = doc.data();
    const notifications = {
        content: 'New Order',
        time: admin.firestore.FieldValue.serverTimestamp(),
        price: `${order.Price}`,  
    }
    }) 
    return createNotifications(notifications)