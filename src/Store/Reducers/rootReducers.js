import authReducer from './authReducers'
import shopReducer from './shopReducers'
import cartReducer from './cartReducers'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  cart: cartReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer