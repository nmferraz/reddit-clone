import React from 'react'

type Props = {
  post: Post
}

function Post({ post }: Props) {
  return <div>{post.id}</div>
}

export default Post
