import L from 'leaflet'
import icon from '../assets/images/icon-location.svg'


// eslint-disable-next-line react-refresh/only-export-components
export default L.icon({
    iconUrl: icon,
    iconSize: [32, 40], // size of the icon
    iconAnchor: [10, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [2, -40], // point from which the popup should open relative to the iconAnchor
})

