import React from 'react';

import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
	return (
		<GoogleMapLoader
			containerElement={ <div style={{height: '100%', borderRadius: '50%' }} /> }
			googleMapElement={
				<GoogleMap defaultZoom={10} defaultCenter={{lat:props.lat, lng:props.lon}} />
			}
		/>
	);
}