"use client"

import { useState } from "react"
import Avatar from "boring-avatars"
import { Post } from "./types/post"

export type PostProps = {
  posts: Post[]
}
const Posts = ({ posts }: PostProps) => {
  const [postList, setPostLists] = useState(posts)

  return (
    <div className="user-gallery">
      <h1 className="heading">Posts</h1>
      <div className="items">
        {postList.map((post, index) => (
          <div className="item user-card" key={index}>
            <div className="body">
              <Avatar
                size={96}
                name={post.title}
                variant="marble"
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
            </div>
            <div className="info">
              <div className="name">{post.title}</div>
              <div className="company">{post.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts
