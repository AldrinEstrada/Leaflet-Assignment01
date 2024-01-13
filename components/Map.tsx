import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const icon = L.icon({
    iconUrl: "/images/map-icon.png",
    iconSize: [30, 30] 
});


const polyline:[number, number][] = [
    [49.28558, -123.11154],
    [49.28556, -123.12021],
    [49.28270, -123.11653],
    [49.27965, -123.10978],
    [49.27319, -123.10035],
    [49.26265, -123.06924],
    [49.24834, -123.05594],
    [49.24439, -123.04611],
    [49.23841, -123.03177],
    [49.22978, -123.01265],
    [49.22586, -123.00386],
    [49.22012, -122.98848],
    [49.21239, -122.95917],
    [49.20004, -122.94906],
    [49.20149, -122.91264],
    [49.20485, -122.90612],
    [49.20448, -122.87431],
    [49.19906, -122.85069],
    [49.18965, -122.84794],
    [49.18285, -122.84479],

]

const polyline2:[number, number][] = [
    [49.26601, -123.07898],
    [49.26270, -123.06924],
    [49.25899, -123.04538],
    [49.26094, -123.03292],
    [49.26510, -123.01361],
    [49.26648, -123.00157],
    [49.26489, -122.98215],
    [49.25932, -122.96403],
    [49.25472, -122.93920],
    [49.25353, -122.91817],
    [49.24860, -122.89695],
    [49.26152, -122.88983],
    [49.27810, -122.84603],
    [49.27736, -122.82820],
    [49.27489, -122.80075],
    [49.28055, -122.79393],
    [49.28585, -122.79166],
]

const multiPolyline:[number, number][][] = [
    [
        [49.25299, -123.00800],
        [49.25980, -123.03300],
        [49.25299, -123.07400],
    ],
    [
        [49.25299, -123.00800],
        [49.25555, -123.03300],
        [49.25777, -123.07400],
    ]
]

const blueOptions = { color: 'blue' }
const greenOptions = { color: 'green' }
// const fillBlueOptions = { color: 'blue' }

const center:[number, number] = [49.25299, -123.00600];



const Map = () => {
    return(
        <div>
            <h1 style={{fontFamily: 'Arial', color: 'black', backgroundColor: 'white'}} >Translink Expo-Line and Millenium Line Map</h1>

            <MapContainer
            style={{height: "100vh"}}
            center={{ lat: 49.23199, lng: -122.99310 }} zoom={12} scrollWheelZoom={true}
            >
           
            
                <TileLayer
                    attribution='&copy; <a href="https://github.com/AldrinEstrada/Leaflet-Assignment01.git">By Aldrin Estrada</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={{ lat: 49.28558, lng: -123.11154}} icon={icon}>
                    <Popup>
                        Waterfront Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.28556, lng: -123.12021}} icon={icon}>
                    <Popup>
                        Burrard Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.28270, lng: -123.11653}} icon={icon}>
                    <Popup>
                        Granville Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.27965, lng: -123.10978}} icon={icon}>
                    <Popup>
                        Stadium-Chinatown Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.27319, lng: -123.10035}} icon={icon}>
                    <Popup>
                        Main Street-Science World Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.26265, lng: -123.06924}} icon={icon}>
                    <Popup>
                        Commercial-Broadway Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.24834, lng: -123.05594}} icon={icon}>
                    <Popup>
                        Nanaimo Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.24439, lng: -123.04611}} icon={icon}>
                    <Popup>
                        29th Avenue Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.23841, lng: -123.03177}} icon={icon}>
                    <Popup>
                        Joyce-Collingwood Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.22978, lng: -123.01265}} icon={icon}>
                    <Popup>
                        Patterson Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.22586, lng: -123.00386}} icon={icon}>
                    <Popup>
                        Metrotown Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.22012, lng: -122.98848}} icon={icon}>
                    <Popup>
                        Royal Oak Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.21239, lng: -122.95917}} icon={icon}>
                    <Popup>
                        Edmonds Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.20004, lng: -122.94906}} icon={icon}>
                    <Popup>
                        22nd Street Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.20149, lng: -122.91264}} icon={icon}>
                    <Popup>
                        New Westminster Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.20485, lng: -122.90612}} icon={icon}>
                    <Popup>
                        Columbia Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.20448, lng: -122.87431}} icon={icon}>
                    <Popup>
                        Scott Road Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.19906, lng: -122.85069}} icon={icon}>
                    <Popup>
                        Gateway Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.18965, lng: -122.84794}} icon={icon}>
                    <Popup>
                        Surrey Central Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.18285, lng: -122.84479}} icon={icon}>
                    <Popup>
                        King George Station
                    </Popup>
                </Marker>


                <Marker position={{ lat: 49.26601, lng: -123.07898}} icon={icon}>
                    <Popup>
                        VCC-Clark Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.26270, lng: -123.06924}} icon={icon}>
                    <Popup>
                        Commercial-Broadway Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.25899, lng: -123.04538}} icon={icon}>
                    <Popup>
                        Renfew Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.26094, lng: -123.03292}} icon={icon}>
                    <Popup>
                        Rupert Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.26510, lng: -123.01361}} icon={icon}>
                    <Popup>
                        Gilmore Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.26648, lng: -123.00157}} icon={icon}>
                    <Popup>
                        Brentwood Town Centre Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.26489, lng: -122.98215}} icon={icon}>
                    <Popup>
                        Holdom Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.25932, lng: -122.96403}} icon={icon}>
                    <Popup>
                        Sperling-Burnaby Lake Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.25472, lng: -122.93920}} icon={icon}>
                    <Popup>
                        Lake City Way Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.25353, lng: -122.91817}} icon={icon}>
                    <Popup>
                        Production Way-University Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.24860, lng: -122.89695}} icon={icon}>
                    <Popup>
                        Lougheed Town Centre Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.26152, lng: -122.88983}} icon={icon}>
                    <Popup>
                        Burquitlam Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.27810, lng: -122.84603}} icon={icon}>
                    <Popup>
                        Moody Centre Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.27736, lng: -122.82820}} icon={icon}>
                    <Popup>
                        Inlet Centre Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.27489, lng: -122.80075}} icon={icon}>
                    <Popup>
                        Coquitlam Central Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.28055, lng: -122.79393}} icon={icon}>
                    <Popup>
                        Lincoln Station
                    </Popup>
                </Marker>
                <Marker position={{ lat: 49.28585, lng: -122.79166}} icon={icon}>
                    <Popup>
                        Lafarge Lake-Douglas Station
                    </Popup>
                </Marker>


                
                <Polyline pathOptions={blueOptions} positions={polyline}/>
                <Polyline pathOptions={greenOptions} positions={polyline2}/>
            

            </MapContainer>
        </div>
       
    )
}

export default Map;