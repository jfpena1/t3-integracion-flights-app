import React, {useState, useEffect} from "react"
import Plane from "./Plane"

function Flight(props) {

    const origin = props.origin
    const destination = props.destination
    const code = props.code
    const plane = props.plane
    const seats = props.seats

    const [passengers, setPassengers] = useState(propspassengers)
    const [positionHistory, setPositionHistory] = useState([])
    const [actualPosition, setActualPosition] = useState(origin)

    function updatePosition(newPosition) {
        setActualPosition(newPosition)
    }

    // update position history of the plane
    useEffect(() => {
        setPositionHistory(prevPositionHistory => {
            let newPositionHistory = prevPositionHistory
            newPositionHistory.push(actualPosition)
            return newPositionHistory
        })
    }, [actualPosition])

    console.log(props)
    return (
        <div>
            <Plane position={actualPosition}/>
        </div>
    )
}

export default Flight