export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      let Tmail = credentials.email;
      if(Tmail.endsWith("thapar.edu") === true ){
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
        console.log(err);
      });} else{
        alert("Login With a Valid mail");
      }
  
    }
  }  
  export const loginWithGoogle = () => {
    return(dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
      //  var token = result.credential.accessToken;
        var user = result.user;
        console.log(user.email);
        let Tmail = user.email;
        if(Tmail.endsWith("thapar.edu") === false ){
          alert("USE a Mail that ends with thapar.edu");
          firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
          });
        }else{
          console.log("Signup Succes");
        }
           
      }).catch(function(error) {
        console.log(error);
      });
    }
  } 
  export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
}
export const signup = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
     const firebase = getFirebase();
     const firestore = getFirestore();
       let Tmail = newUser.email;
       if(Tmail.endsWith("thapar.edu")=== true){
     firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
     ).then((resp) => {
        return firestore.collection('Users').doc(resp.user.uid).set({
          name: newUser.name,
          phone: newUser.number
        })
     }).then(() =>{
        dispatch({ type: 'SIGNIN_SUCCESS'});
     }).catch(err => {
        dispatch({ type: 'SIGNIN_ERROR', err });
     })} else {
       alert("Use a Valid Email");
     }
  }
}
export const adDetails = (updateUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    if(updateUser.name === "" || updateUser.number === ""){
       alert("Cannot Submit empty form");
    } else {
    var user = firebase.auth().currentUser;
    if(user){
    firestore.collection('Users').doc(user.uid).set({
      name: updateUser.name,
      phone: updateUser.phone
    }).then(function() {
      alert("Details successfully updated!");
  })
  .catch(function(error) {
      alert("Couldn't update your details, Try Again");
  });}
  }
}
}