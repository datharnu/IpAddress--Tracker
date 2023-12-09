import React, { useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from './icon';
import L from 'leaflet'; // Import LatLng from Leaflet

export default function Map({ mapData }) {
    const { location } = mapData;
    const position = [location?.lat, location?.lng];

    const map = useMap();
    useEffect(() => {
        if (position[0] && position[1]) {
            // Check if both latitude and longitude are available
            map.flyTo(position, 13, {
                animate: true,
            });
        }
    }, [map, position]);

    return (
        <>
            {location && (
                <Marker icon={icon} position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            )}
        </>
    );
}
