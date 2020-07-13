import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotal({value}) {
	const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
	return (
		<div className="container">
			<div className="row">
				<div className="col-10 ml-auto text-right mt-2">
					<Link to="/">
						<button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>Clear cart</button>
					</Link>
					<h5>
						<span className="text-title">
							subtotal:
						</span>
						<strong>$ {cartSubTotal}</strong>
					</h5>
					<h5>
						<span className="text-title">
							tax:
						</span>
						<strong>$ {cartTax}</strong>
					</h5>
					<h5>
						<span className="text-title">
							total:
						</span>
						<strong>$ {cartTotal}</strong>
					</h5>
				</div>
			</div>
		</div>
	);
}