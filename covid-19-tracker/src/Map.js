import React from 'react'
import "./Map.css";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { showDataOnMap } from './util';


function Map({ countries, casesType, center , zoom}) {
    return (
        <div className="map">
                <MapContainer
                    className="markercluster-map"
                    center={[51.0, 19.0]}
                    zoom={2}
                    maxZoom={18}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* Loop through countries and draw circles on the screen */}
                    {showDataOnMap(countries, casesType)}
            </MapContainer>
        </div>
    )
}

export default Map;
