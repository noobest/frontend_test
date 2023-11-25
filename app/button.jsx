"use client"

import { useState } from "react"
import Posts from "./posts"

const Button = () => {
  const [posts, setPosts] = useState([])
  async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return setPosts(data)
  }

  return (
    <div>
      {posts.length < 1 ? (
        <button onClick={fetchPosts} className="">
          Get Posts
        </button>
      ) : (
        <Posts posts={posts} />
      )}
    </div>
  )
}

export default Button
