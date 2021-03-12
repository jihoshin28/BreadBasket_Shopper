import { User } from './User'
import { Store } from './Store'

export interface Mappable {
    location: {
        lng: number;
        lat: number;
    },
    markerContent(): string
}

export class Map {
    private googleMap: google.maps.Map
    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementbyId(divId),{
            zoom: 14,
            center: {
                lng: 0, 
                lat: 0
            }
        });
    }
    
    addMarker(mappable: Mappable): void {
        const marker = new googlemaps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener('load', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            infoWindow.open(this.googleMap, marker)
        })
    }
}





