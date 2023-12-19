import React, {useMemo} from 'react';

import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api';

import MapsConfig from "./maps/Config";
const config = MapsConfig;

function Map() {
	const {isLoaded} = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
	});

	if(!isLoaded) return <>Ładowanie...</>

	return(
		<MapElement />
	);
}

function MapElement() {
	const center = useMemo(() => (config.center), []);
	const office = useMemo(() => (config.office.center), []);

	return(
		<GoogleMap
			zoom={config.zoom}
			center={center}
			mapContainerClassName="map-element-container"
		>
			<MarkerF
				position={office}
				title="Biuro"
				onClick={() => window.open("https://maps.app.goo.gl/iA3pTqpe4Ksumty77")}
			/>
		</GoogleMap>
	);
}

export default Map;