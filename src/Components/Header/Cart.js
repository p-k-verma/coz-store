import React from "react";
import CartProduct from "./CartProduct";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const cartproductdetails = useSelector(state => state.Cart.items)
  const cartTotalPrice = useSelector(state => state.Cart.TotalPrice)


  return (
    <>
      <div className={`wrap-header-cart js-panel-cart ${props.onClick[0] ? "show-header-cart" : ''}`}>
        <div className="s-full js-hide-cart"></div>

        <div className="header-cart flex-col-l p-l-65 p-r-25">
          <div className="header-cart-title flex-w flex-sb-m p-b-8">
            <span className="mtext-103 cl2">Your Cart</span>

            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart" onClick={props.onClick[1]}>
              <i className="zmdi zmdi-close"></i>
            </div>
          </div>

          
          {cartproductdetails.length ? <div className="header-cart-content flex-w js-pscroll">
            <ul className="header-cart-wrapitem w-full">
              {cartproductdetails.map((cartproductdetail,index)=> <CartProduct key={`-p${index}`} cartproductdetail={cartproductdetail}/>)}
            </ul>

            <div className="w-full">
              <div className="header-cart-total w-full p-tb-40">Total: ${Math.round(cartTotalPrice)}</div>

              <div className="header-cart-buttons flex-w w-full">
                <Link className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10" to='/cart'>View Cart</Link>

                <a
                  href="shoping-cart.html"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
                >
                  Check Out
                </a>
              </div>
            </div>
          </div> : <p className="text-center">You have no items in your shopping cart. <Link to='/product' onClick={props.onClick[1]} >Click</Link> here to continue shopping.</p>}
          
        </div>
      </div>
    </>
  );
}
