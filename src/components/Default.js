import React, { Component } from 'react';

class Default extends Component {
	render() {
		console.log(this.props);
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto text-center text-title pt-5">
						<h1>404</h1>
						<h1>Error</h1>
						<h1>Page not found</h1>
						<h3>
							The requested url <span className="text-danger">{this.props.location.pathname}</span>{" "}
							was not found
						</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default Default;