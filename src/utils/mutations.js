import { gql } from '@apollo/client';

export const ADD_STORYBOARD = gql`
  mutation addStoryboard
`
export const DELETE_STORYBOARD = gql`
  mutation deleteStoryboard
`

export const UPDATE_STORYBOARD = gql`
  mutation updateStoryboard
`

export const RETREIVE_STORYBOARD = gql`
  mutation retreiveStoryboard
`

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;