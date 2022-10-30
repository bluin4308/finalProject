import { gql } from "@apollo/client";

const GET_ITEMS = gql`
  query getItems(
    $tags: [String]
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    clothes(
      first: $first
      last: $last
      after: $after
      before: $before
      where: { tagSlugAnd: $tags }
    ) {
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
      nodes {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
        customFields {
          price
          saleprice
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export { GET_ITEMS };
