import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					 const {id, company, img, info, price, title, inCart} = value.detailProduct;
					 return (
					 	<div className="container py-5">
					 		<div className="row">
					 			<div className="col-10 mx-auto text-center my-5">
					 				<h1>{title}</h1>
					 			</div>
					 		</div>
					 		{/* end title*/}
					 		{/* product info */}
					 		<div className="row">
					 			<div className="col-10 col-md-6 mx-auto my-3">
					 				<img src={img} className="img-fluid" alt="product" />
					 			</div>
					 			{/* product text */}
					 			<div className="col-10 col-md-6 mx-auto text-capitalize my-3">
					 				<h2>model: {title}</h2>
					 				<h4 className="text-title text-uppercase mt-3 mb-2">
					 					made by: <span className="text-uppercase">{company}</span>
					 				</h4>
					 				<h4 className="text-blue">
					 					Price: <span>$</span>{price}
					 				</h4>
					 				<p className="font-weight-bold text-capitalize mt-3 mb-0">
					 				some info about product:
					 				</p>
					 				<p className="text-muted">{info}</p>
					 				{/* buttons */}
					 				<Link to="/">
					 					<ButtonContainer>Back to products</ButtonContainer>
					 				</Link>
					 				<ButtonContainer 
					 				cart
					 				disabled={inCart ? true : false}
					 				onClick={() => {
					 					value.addToCart(id);
					 				}}
					 				>
					 					{inCart ? "inCart" : "add to cart"}
					 				</ButtonContainer>
					 			</div>
					 		</div>
					 	</div>
					 );
				}}
			</ProductConsumer>
		);
	}
}