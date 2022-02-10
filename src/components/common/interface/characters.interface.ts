import { Episodes } from './episodes.interface'
import { Origin } from './origin.interface'
import { Location } from './locations.interface'

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    created: Date;
}

interface CharacterInfo{
    pages : number;
    count : number;
    next : number;
    prev : number;
}

export interface CharacterParams{
    page : number;
}

export interface CharacterResult{
    characters:{ results : Character[] ; info : CharacterInfo  }
}

export interface CharacterDetails{
    character:{ 
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        image: string;
        created: Date;
        origin : Origin;
        location: Location;
        episode: Episodes[]
      }
}



