import { useEffect, useMemo } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png"

const Routing = ({points}) => {
    const map = useMap();

    console.log('render route')

    useEffect(() => {
      if (!map) return;
  
      const routingControl = L.Routing.control({
        waypoints: [
            L.latLng(points[0].map(c => Number(c))[0], points[0].map(c => Number(c))[1]), 
            L.latLng(points[1].map(c => Number(c))[0], points[1].map(c => Number(c))[1])
        ],
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }]
          },
        routeWhileDragging: false,
        show: false,
        fitSelectedRoutes: true,


        createMarker: function (i, waypoint, n) {
            const marker = L.marker(waypoint.latLng, {
                draggable: false,
              bounceOnAdd: true,
              bounceOnAddOptions: {
                duration: 1000,
                height: 800,
              },
              icon: L.icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41], 
                iconAnchor: [12, 41],
                popupAnchor: [-3, -76],
              })
            });
            
            return marker;
          }



      }).addTo(map);
  
      return () => map.removeControl(routingControl);
    }, [map, points]);
  
    return null;
  }

  export default Routing