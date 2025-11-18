import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const position = [22.2678, 91.7895];
  const allStores = useLoaderData();
  const mapReference = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    const district = allStores.find((stor) =>
      stor.district.toLowerCase().includes(search.toLowerCase())
    );
    if (district) {
      const cordinate = [district.latitude, district.longitude];
      mapReference.current.flyTo(cordinate, 15);
    }
  };

  return (
    <div>
      <h1>WE are available in ALL Over Bangladesh</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" required placeholder="Search" />
          </label>
        </form>
      </div>
      <div className="h-200">
        <MapContainer
          center={position}
          zoom={10}
          scrollWheelZoom={false}
          className="h-200"
          ref={mapReference}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {allStores.map((store) => (
            <Marker position={[store.latitude, store.longitude]}>
              <Popup>
                {store.district} <br /> Available City-
                {store.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
