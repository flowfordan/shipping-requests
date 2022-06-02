import styles from './TrackingMap.module.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'


const ResizeMap = () => {
    const map = useMap();
    map._onResize();
    return null;
  };

const TrackingMap = ({requestsChosen}) => {

    const position = [55.7511, 37.6183];

    let renderPoints= null;
    if(requestsChosen){
        renderPoints = requestsChosen.map(r => {
        let from = (
            <Marker position={r.currentFrom.fromCoords.split(',')} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
            </Marker>
        );

        let to = (
            <Marker position={r.currentTo.toCoords.split(',')} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
            </Marker>
        )
        return(
            [from, to]
        )
    }).flat()}

    return(
        <div className={styles.mapWrap}>
        <div className={styles.mapContainer}>
            <MapContainer center={[55.7511, 37.6183]} zoom={9} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
            <ResizeMap />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // url="https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/{x}/{y}/{@2x}.jpg90?access_token=pk.eyJ1IjoiZmxvd2ZvcmRhbiIsImEiOiJjbDNkYTc2eWswM3ZyM2pxbDY4OGVzbHluIn0.uRGLu4AV1gMVTPLWFgDGoQ"
                />
                {renderPoints}
                {/* <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer>
        </div>
        </div>
        
        
    )
}

export {TrackingMap}