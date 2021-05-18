import React, {useState, useEffect} from "react"
import './App.css';
import Map from './components/Map'
import FlightInfo from "./components/FlightInfo"
import {SocketContext, socket} from './context/socket'
import Button from "@material-ui/core/Button"
import getRandomColors from "./helpers/getRandomColors"

function App() {
  const [planesInfo, setPlanesInfo] = useState([])
  const [numberOfPlanes, setNumberOfPlanes] = useState(0)
  const [pathColors, setPathColors] = useState([])

  // set colors of paths
  useEffect(() => {
    const colorList = getRandomColors(numberOfPlanes)
    setPathColors(colorList)
  }, [numberOfPlanes]);

  // call FLIGHTS info when app mounts
  useEffect(() => {
    updateFlights()
    const colorList = getRandomColors(numberOfPlanes)
    setPathColors(colorList)
  }, []);

  const handlePlanesInfo = (data) => {
    setPlanesInfo(data);
    if (numberOfPlanes !== planesInfo.length) {
      console.log("cambiando n de aviones")
      setNumberOfPlanes(planesInfo.length)
    }
  };

  const updateFlights = () => {
  
    // emit USER_ONLINE event
    socket.emit("FLIGHTS"); 

    // subscribe to socket events
    socket.on("FLIGHTS", data => {
        handlePlanesInfo(data);
    })
    // before the component is destroyed
    // unbind all event handlers used in this component
    return() => {socket.off("FLIGHTS");} 
  }

  return (
    <SocketContext.Provider value={socket}>
      <div id="mapid">
        <Map planesInfo={planesInfo} pathColors={pathColors}/>
      </div>
      <br/>
      <div className="planeInfo"> 
      <Button 
        variant="outlined" 
        color="primary"
        onClick={updateFlights}>
        Get Info!
      </Button>
      {planesInfo.length > 0 ? 
        planesInfo.map((data, i) => 
          <FlightInfo 
            key={i} 
            code={data["code"]}
            airline={data["airline"]}
            origin={data["origin"]}
            destination={data["destination"]}
            plane={data["plane"]}
            seats={data["seats"]}
            passengers={data["passengers"]}
          />
        ) : 
        null
      }
      </div>
    </SocketContext.Provider>
  );
}

export default App;
