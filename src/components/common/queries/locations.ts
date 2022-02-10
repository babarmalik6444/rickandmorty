import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
query GetLocationsQuery($page: Int!) {
    locations (page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        created
      }
    }
  }
`;


export const GET_LOCATION_DETAILS = gql`
query GetLocationDetailQuery($id: ID!) {
    location(id: $id){
      id
      name
      type
      dimension
      created
      residents{
        id
        name
        status
        species
        type
        gender
        image
        created
        
      }
    }
  }
`;