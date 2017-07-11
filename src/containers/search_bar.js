import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<div className="row">
				<form id="searchForm" className="" onSubmit={this.onFormSubmit}>
					<div className="form-group col-md-10">
						<input
							type="text"
							className="form-control"
							placeholder="Enter a city name..."
							value={ this.state.term }
							onChange={ this.onInputChange } />
					</div>
					<div className="form-group col-md-2">
						<button type="submit" className="btn btn-primary">Search</button>
					</div>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);