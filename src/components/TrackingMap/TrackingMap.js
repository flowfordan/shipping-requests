import styles from './TrackingMap.module.css';
import { MapContainer, TileLayer, useMap, Tooltip, CircleMarker } from 'react-leaflet';
import Routing from './Routing/Routing';

const ResizeMap = () => {
    const map = useMap();
    map._onResize();
    return null;
};

const TrackingMap = ({requestsChosen}) => {

    let renderPoints = null;
    let renderRoute = null;
    if(requestsChosen.length !== 0){
        renderPoints = requestsChosen.map(r => {
            let from = (
                <CircleMarker center={r.currentFrom.fromCoords.split(',') } radius={0} key={r.currentFrom.fromId}>
                    <Tooltip permanent>
                        {`Пункт загрузки No.${r.currentFrom.fromId}`}
                    </Tooltip>
                </CircleMarker>
            );

            let to = (
                <CircleMarker center={r.currentTo.toCoords.split(',')} radius={0} key={r.currentTo.toId}>
                    <Tooltip permanent>
                        {`Пункт доставки No.${r.currentTo.toId}`}
                    </Tooltip>
                </CircleMarker>
            )
            return([from, to])
        }).flat();

        renderRoute = (<Routing points={[requestsChosen[0].currentFrom.fromCoords.split(','), requestsChosen[0].currentTo.toCoords.split(',')]}/>)
    };

    return(
        <div className={styles.mapWrap}>
        <div className={styles.mapContainer}>
            <MapContainer center={[55.7511, 37.6183]} zoom={9} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
            <ResizeMap />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {renderPoints}
                {renderRoute}
            </MapContainer>
        </div>
        </div>
    )
}

export {TrackingMap}
