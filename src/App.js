import logo from './logo.svg';
import './App.css';
import Map from './components/Map'
import {SocketContext, socket} from './context/socket'

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div id="mapid">
        <Map/>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
