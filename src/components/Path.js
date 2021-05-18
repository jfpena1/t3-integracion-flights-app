import React from "react"
import {Polyline, Tooltip, Marker} from 'react-leaflet'
import L from 'leaflet'

function Path(props) {
    console.log(props.type)
    const originTitle = props.type === "straight" ? 'origen ' + 
        props.planeCode.toString() + " :" + 
        props.positions[0].toString() 
        : null
    const destinationTitle = props.type === "straight" ? 'destino ' + 
        props.planeCode.toString() + " :" + 
        props.positions[1].toString() 
        : null
    return(
        <Polyline 
            pathOptions={{
                color: props.color,
                dashArray: props.type === "straight" ? '10,15': '1,0.5',
                lineJoin: 'round',
                lineCap:'butt'}} 
            positions={props.positions} 
        >
            <Tooltip>{props.planeCode} </Tooltip>
            {props.type === "straight" ? 
                <Marker 
                    position={props.positions[0]}
                    title= {originTitle}
                    icon={iconStart} 
                    

                />
                : 
                null
            }
            {props.type === "straight" ? 
                <Marker 
                    position={props.positions[1]}
                    title={destinationTitle}
                    icon={iconEnd} 
                />
                : 
                null
            }    
        </Polyline>
    )
}


const colorStart = 'green'
const colorEnd = 'red'

const markerHtmlStylesStart = `
  background-color: ${colorStart};
  width: 1rem;
  height: 1rem;
  display: block;
  left: 0rem;
  top: 0rem;
  position: relative;
  border-radius: 1rem 1rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const iconStart = L.divIcon({
  className: "",
  iconAnchor: [0, 24],
  labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${markerHtmlStylesStart}" />`
})

const markerHtmlStylesEnd = `
  background-color: ${colorEnd};
  width: 1rem;
  height: 1rem;
  display: block;
  left: 0rem;
  top: 0rem;
  position: relative;
  border-radius: 1rem 1rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const iconEnd = L.divIcon({
  className: "",
  iconAnchor: [0, 24],
  labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${markerHtmlStylesEnd}" />`
})


export default Path;