import React, {useState, useEffect} from "react"
import './App.css';
import Map from './components/Map'
import Chat from "./components/Chat"
import FlightInfo from "./components/FlightInfo"
import ProfileNameInput from "./components/ProfileNameInput"
import {SocketContext, socket} from './context/socket'
import Button from "@material-ui/core/Button"
import getRandomColors from "./helpers/getRandomColors"

function App() {
  const [planesInfo, setPlanesInfo] = useState([])
  const [numberOfPlanes, setNumberOfPlanes] = useState(0)
  const [pathColors, setPathColors] = useState([])
  const [chatList, setChatList] = useState([])
  const [username, setUsername] = useState("Default User")

  // set colors of paths when new planes appear
  useEffect(() => {
    const colorList = getRandomColors(numberOfPlanes)
    setPathColors(colorList)
  }, [numberOfPlanes]);

  // call FLIGHTS info when app mounts
  useEffect(() => {
    updateFlights()
    // const colorList = getRandomColors(numberOfPlanes)
    // setPathColors(colorList)
  }, []);

  // listenning to CHAT broadcasts
  useEffect(() => {
    // subscribe to socket events
    socket.on("CHAT", data => {
      handleChatReceived(data);
    })
    // before the component is destroyed
    // unbind all event handlers used in this component
    return() => {socket.off("CHAT");}
  }, [chatList]);


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

  const handlePlanesInfo = (data) => {
    console.log(data)
    setPlanesInfo(data);
    if (numberOfPlanes !== planesInfo.length) {
      console.log("cambiando n de aviones")
      setNumberOfPlanes(planesInfo.length)
    }
  };

  const handleChatReceived= (msg) => {
    // if (msg.name == username) {return}
    // emit CHAT event
    setChatList(prevState => {
      var newState = prevState.concat([msg])
      // console.log(newState)
      return newState
    }) 
  };

  const handleChatEmitted = (response) => {
    const value = response.value
    const msg = {name:username, message:value}
    // console.log(msg)
    // emit CHAT event
    socket.emit("CHAT", msg); 
  };

  const handleUsernameChange = (e) => {
    var target = e.target
    var newName= target.value
    // console.log("previous user")
    // console.log(username)
    setUsername(newName)
    // console.log("cambiando user!")
    // console.log(username)
  };

  return (
    <SocketContext.Provider value={socket}>
      <div id="mapid">
          <Map planesInfo={planesInfo} pathColors={pathColors}/>
      </div>
      <div>
        <div className="chatContainer">
          <Chat
          style={{float:"right", width:"20%"}}
          chatList={chatList}
          handleChatEmitted={handleChatEmitted}
          />
          <ProfileNameInput handleUsernameChange={handleUsernameChange}/> 
        </div>
        <div id="mapid"  style={{float:"left"}}>
          <Map planesInfo={planesInfo} pathColors={pathColors}/>
        </div>
      </div>
      <div className="planeInfo" style={{float:"left", width:"60%"}}> 
        <Button 
          variant="outlined" 
          color="primary"
          onClick={updateFlights}>
          Get Planes Info!
        </Button>
        {planesInfo.length > 0 ? 
          planesInfo.map((data, i) => 
            <FlightInfo
              className="planeInfo" 
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
