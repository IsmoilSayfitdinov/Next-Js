"use client"
import { useEffect, useState } from 'react'
import styles from "./../posts.module.css"
import Link from 'next/link'
function page() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/post/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setPosts(data?.results))
    }, [])
    console.log(posts);
    

  return (
    <div className={styles.posts}>
        {posts?.map((post) => (
            <div className={styles.post} key={post.id}>
                <Link href={`/post/${post.id}`}><img src={post.image} alt="post" width={170} height={180} /></Link>
                <div className={styles.text__post}>
                    <Link href={`/post/${post.id}`}><h3>{post.title}</h3></Link>
                    <p>{post.description}</p>
                <div className={styles.like_and_comments__count}>
                    <p>Like: {post.like_count}</p>
                    <p>Comments: {post.comment_count}</p>
                </div>
                </div>
                
            </div>
        ))}
    </div>
  )
}

export default page