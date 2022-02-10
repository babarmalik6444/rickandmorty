import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
query GetCharactersQuery($page: Int!) {
    characters (page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  }
`;

export const GET_CHARACTER_DETAILS = gql`
query GetCharacterDetailQuery($id: ID!) {
  character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      created
      origin{
        id
        name
        type
        dimension
        created
      }
    location{
      id
      name
      type
      dimension
      created
      }
      episode{
        id
        name
        air_date
        episode
        created
      }
      
    }
  }
`;