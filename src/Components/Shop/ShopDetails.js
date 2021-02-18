import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Cart from './Cart'
import { addToCart} from '../../Store/Actions/cartActions'
import './ShopDetails.css'
import logo from './Images/BiteBoxLogo.jpeg'
class ShopDetails extends Component {
  calculateAdd = (menu, shop, id) => {
    this.props.addToCart(menu, shop, id)
    
  }
  
  render() {
    const { shop, auth, menu, id} = this.props;
    if (!auth.uid) return <Redirect to='/login' />
    if (shop) {
      return (
        <div className="container-fluid">
          <div className="row jumbotron-fluid header">
            <div className="col-12 col-md-5 tot">
              <img src={shop.image} alt={logo} width="300" height="300" />
            </div>
            <div className="col-12 col-md-7 tit">
                <h1>{shop.name}</h1>
                <p>{ shop.Discount === 0?  <span></span>  :<p>Yay dicount of Rs {shop.Discount}</p>}
                <br />{shop.MinOrder === 0? <span></span>:<span>Free Delivery on order above Rs {shop.MinOrder}</span>} 
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-7 menuList">
              <div>
                <h2>MENU</h2>
              </div>
              {menu && menu.map(menu => {
                if (menu) {
                  return (
                    <div className="shop" key={menu.id}>
                      <div className="row">
                        <div className="col-6">
                          <img src={menu.imageurl} style={{ width: 70, height: 70 }} className="rounded img-fluid img-thumbnail" alt={logo} />
                          <h4>{menu.Name}</h4>
                        </div>
                        <div className="col-6">
                          <span className="price">Rs {menu.Price}</span>
                          <input type="button" className="btn btn-outline-info btn-lg" name="b1" value="+" onClick={() => { this.calculateAdd(menu, shop, id) }} />
                        </div>
                      </div>
                    </div>
                  )
                }
                else {
                  return (
                    <div>
                     <div>loader</div>
                    </div>
                  )
                }
              })}
            </div>
            <div className="col-12 col-md-5"><Cart /></div>
          </div>
        </div>
      )

    }
    else {
      return (
        <div className="container center">
          <p>Loading Menu...</p>
        </div>
      )
    }
  }
}
const mapsToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const shops = state.firestore.data.Outlet;
  const shop = shops ? shops[id] : null;
  const menu = state.firestore.ordered.Menu;
  return {
    shop: shop,
    auth: state.firebase.auth,
    menu: menu,
    id: id
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
     addToCart: (menu, shop, id) => dispatch(addToCart(menu, shop, id))
  }
}

export default compose(
  connect(mapsToProps, mapDispatchToProps),
  firestoreConnect(Props => [{ collection: 'Outlet' },
  {
    collection: 'Outlet',
    doc: Props.match.params.id,
    subcollections: [{ collection: 'Menu' }],
    storeAs: 'Menu'
  }

  ])
)
  (ShopDetails);