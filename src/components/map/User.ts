import {Mappable} from './Map'

export class User implements Mappable{
    name: string;
    location: {
        lat: number
        lng: number
    }

    constructor(name: string, lat: number, lng: number){
        this.name = name,
        this.location = {
            lat: lat,
            lng: lng
        }
    }

    markerContent(): string{
        return `
            <div>
                <h1>
                    Name: Name
                </h1>
            </div>
        `
    }
}