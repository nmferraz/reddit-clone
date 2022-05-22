type Comments = {
  created_at: string
  id: number
  post_id: number
  text: string
  username: string
}

type Vote = {
  created_at: string
  id: number
  post_id: number
  upvote: boolean
  username: string
}

type Subreddit = {
  created_at: string
  id: number
  topic: string
}

type Post = {
  body: string
  subreddit_id: number
  comments: Comments[]
  created_at: string
  id: number
  title: string
  votes: Vote[]
  subreddit: Subreddit[]
  image: string
  username: string
}
