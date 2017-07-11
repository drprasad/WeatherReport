import React from 'react';

import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return(
		<div>
			<Sparklines data={props.data} height={50} width={100}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<small className="center"><strong>avg: </strong>{average(props.data)} {props.units}</small>
		</div>
	);
}