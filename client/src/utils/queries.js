import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_ALL_BOUQUETS = gql`
query AllBouquets($occasionId: ID!) {
  allBouquets(occasionId: $occasionId) {
    name
    description
    image
    price
    _id
    occasion {
      _id
      name
    }
  }
}
`;

export const QUERY_BOUQUET = gql`
query Bouquet($bouquetId: ID!) {
  bouquet(bouquetId: $bouquetId) {
    name
    description
    image
    price
    featured
    occasion {
      name
    }
  }
}`;

export const QUERY_OCCASIONS = gql`
query occasions {
  occasions {
    _id
    name
    image
  }
}`;



export const QUERY_FEATURED = gql`
query featured {
  featured {
    name
    description
    image
    price
    _id
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;