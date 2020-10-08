import React from 'react'
import logo from'./Images/BiteBoxLogo.jpeg'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './ShopSummary.css'
const ShopSummary = ({shop}) => {
    if(shop){
    return(
          
        <div className="card" style={{width: 300 }} >
           <img src={shop.image} alt={logo} className="card-img-top  mx-auto img-thumbnail" style={{maxWidth: 250, height: 200}}  />
           <div className="card-body">
             <h5 className="card-title">{shop.name}</h5>
             <p className="card-text">Free Delivery above order of Rs {shop.MinOrder}</p>
            <Link to={'/project/'+ shop.id} key={shop.id}><button className="btn btn-primary">Menu</button></Link>
            </div>
       </div>     
    )}
    else{
        return(
            <div>
                <Loader
               type="Puff"
               color="#00BFFF"
               height={100}
               width={100}
               timeout={5000} //3 secs
               />
            </div>
        )
    }
}
export default ShopSummary