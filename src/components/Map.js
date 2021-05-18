import React, {useState, useContext, useEffect} from 'react'
import { MapContainer, TileLayer, Polyline } from 'react-leaflet'
import '../App.css';
import {SocketContext} from '../context/socket.js'
import Plane from "./Plane"
import Path from "./Path"

function Map(props) {
    const [planePositions, setPlanePositions]= useState({});
    const [center, setCenter] = useState([ -35, -71])
    const [flights, setFlights]= useState([]);
    const socket = useContext(SocketContext);

    const handlePosition = (data) => {
        const planeCode = data["code"];
        const position = data["position"];
        if (flights.length === 0) {setCenter(position)}
        var previousPositions = planePositions[planeCode] ?  planePositions[planeCode] : []
        var newPositions = previousPositions.concat([position])
        // console.log(planeCode)
        // console.log(newPositions)
        // console.log(Object.keys(planePositions).length)
        setPlanePositions(prevState => {
            return {
                ...prevState,
                [planeCode]: newPositions
            }
        });
        setFlights(prevState => {
            if (prevState.includes(planeCode) == true) {
                return prevState
            }
            else{
                // console.log(prevState)
                // console.log(flights)
                var addedList = [planeCode]
                var newState = flights.concat(addedList)
                return newState
            }     
        });
      };

    useEffect(() => {
        // as soon as the component is mounted, do the following tasks:
        // subscribe to socket events
        socket.on("POSITION", data => {
            handlePosition(data);
        }
        ); 
    
        return () => {
          // before the component is destroyed
          // unbind all event handlers used in this component
          socket.off("POSITION");
        };
      }, [socket, planePositions]);


    return (
        <MapContainer center={center} zoom={5} scrollWheelZoom={false}>
            <head> 
                <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossorigin=""
                />
                <script 
                src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                crossorigin="">
                </script>
            </head>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        
            {flights.length > 0 ? flights.map((code, i) => 
            <Plane 
                key={i} 
                position={planePositions[code][planePositions[code].length - 1]} 
                planeCode={code}>
            </Plane>
            ) : 
            null
            }
            {props.planesInfo.length > 0 ? 
                props.planesInfo.map((info, i) =>
                    <Path 
                        color={props.pathColors[i]} 
                        positions={[info.origin, info.destination]}
                        type={"straight"}
                        planeCode={info.code}
                    />
                )
                :null
            }

            {Object.keys(planePositions).length > 0 ? 
                Object.keys(planePositions).map((planecode, i) =>
                    <Path 
                        color={"black"}
                        positions={planePositions[planecode]}
                        type={"curved"}
                        planeCode={planecode}
                    />
                )
                :null
            }
            
        </MapContainer>
    )
}

export default Map 

