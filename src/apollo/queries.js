import { gql } from "@apollo/client";

const GET_ITEMS = gql`
  query getItems($tag: [String], $first: Int = 10, $after: String) {
    clothes(first: $first, after: $after, where: { tagSlugAnd: $tag }) {
      pageInfo {
        hasNextPage
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
