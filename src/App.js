import "leaflet/dist/leaflet.css"
import arrow from "./images/icon-arrow.svg"
import background from "./images/pattern-bg-desktop.png"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// https://geo.ipify.org/api/v2/country?apiKey=at_H2r2COPiJDyKBGCTLoGM0tHQPGnMC&ipAddress=8.8.8.8

function App() {
  return (
    <section>
      <div className="absolute w-full">
        <img src={background} alt="" className="h-80" />
      </div>
      <article className="relative p-8">
        <h1 className="text-3xl text-center text-white font-bold mb-8">IP Address Tracker</h1>
        <form className="flex justify-center max-w-2xl mx-auto">
          <input type="text" name="ipaddress" id="ipaddress" placeholder="Search for any IP Adress or domain" required className="py-2 px-4 rounded-l-lg w-full"/>
          <button type="submit" className="bg-black py-4 px-4 hover:opacity-60 rounded-r-lg">
            <img src={arrow} alt=""/>
          </button>
        </form>
      </article>
      <article className="bg-white rounded-lg shadow p-8 mx-auto relative grid grid-cols-4 max-w-6xl mb-8">
        <div className="border-r border-slate-400 px-4">
          <h2 className="font-bold text-slate-600">IP ADDRESS</h2>
          <p className="font-bold">192.212.174.101</p>
        </div>
        <div className="border-r border-slate-400 px-4">
          <h2 className="font-bold text-slate-600">LOCATION</h2>
          <p className="font-bold">Brooklyn</p>
        </div>
        <div className="border-r border-slate-400 px-4">
          <h2 className="font-bold text-slate-600">TIMEZONE</h2>
          <p className="font-bold">UTC -05:00</p>
        </div>
        <div className="px-4">
          <h2 className="font-bold text-slate-600">ISP</h2>
          <p className="font-bold">SpaceX Starlink</p>
        </div>
      </article>
      <MapContainer 
        center={[51.505, -0.09]} 
        zoom={13} 
        scrollWheelZoom={false}
        style={{ height: "600px", width: "100vw"}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default App;
