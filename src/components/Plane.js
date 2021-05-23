import React from 'react'
import {Marker, Tooltip} from 'react-leaflet'
import L from 'leaflet'
import '../App.css';

const iconUrl = 'https://e7.pngegg.com/pngimages/115/289/png-clipart-airplane-silhouette-aircraft-drawing-airplane-hand-wikimedia-commons.png'
var planeIcon = L.icon({
    iconUrl: iconUrl,
    iconSize:     [35, 40], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

function Plane(props) {
    
    return (
        <Marker 
        position={props.position} 
        icon={planeIcon}
       >
            <Tooltip>{props.planeCode} </Tooltip>
        </Marker > 
    )
}

export default Plane
