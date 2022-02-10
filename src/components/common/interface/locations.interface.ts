import { Character } from './characters.interface'
export interface Location {
    id:number;
    name: string;
    type: string;
    dimension: string;
    created: string;
    residents: Character[];
}

interface LocationsInfo{
    pages : number;
    count : number;
    next : number;
    prev : number;
}

export interface LocationsParams{
    page : number;
}

export interface LocationResult{
    locations:{ results : Location[]; info: LocationsInfo; }
}

export interface LocationDetails{
    location: Location;
}



