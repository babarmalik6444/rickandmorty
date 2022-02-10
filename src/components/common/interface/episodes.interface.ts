import { Character } from './characters.interface'
export interface Episodes {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    created: Date;
    characters: Character[];
}

interface EpisodesInfo{
    pages : number;
    count : number;
    next : number;
    prev : number;
}

export interface EpisodesParams{
    page : number;
}

export interface EpisodesResult{
    episodes:{ results : Episodes[] ; info : EpisodesInfo  }
}

export interface ExpisodeDetails{
    episode:Episodes;
}



