import React from "react"
import '../App.css';
function FlightInfo(props) {

    return(
        <div className="singlePlainInfo">
            <ul>
                <li> codigo: {props.code}</li>
                <li> aerolinea: {props.airline}</li>
                <li> origen: {props.origin[0]}, {props.origin[1]}</li>
                <li> destino: {props.destination[0]}, {props.destination[1]}</li>
                <li> avion: {props.plane}</li>
                <li> asientos: {props.seats}</li>
                <li> pasajeros:</li>
                {props.passengers.map((pas, index) => {
                    return (
                        <p> nombre: {pas["name"]}, 
                            edad: {pas["age"]}
                        </p> 
                    )
                     
                })}
            </ul>
        </div>
    )
}

export default FlightInfo
// {code:String,airline:String,origin: [Float,Float],destination: [Float,Float],plane:String,seats:Integer,passengers: [{name:String, age:Integer}]}]