import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
query MyQuery{ 
  getPostList{ 
    body
    id
    image
    created_at
    title
    subreddit_id
    username
  }
}
`

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`
