"use client"
import styles from "../../posts.module.css"
import { useEffect, useState } from 'react'
function page({params}) {
  const [postDetail ,setPostDetail] = useState({})
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/post/${params.id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => setPostDetail(data))
  }, [params.id])

  console.log(postDetail);
  
  const likeHandle = (id) => {
    fetch(`http://localhost:8000/api/v1/post/${id}/like/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setPostDetail(prevState => ({
        ...prevState,
        like_count: data.like_count,
      }));
      
    })
    .catch(error => console.error("Error liking post:", error));
  };
  return (
    <div>
      <div className={styles.post_id__main}>
          <img src={postDetail.image} alt="post"/>
          <div>
              <h1>{postDetail.title}</h1>
              <p>{postDetail.description}</p>
              <p className={styles.user__username}>{postDetail?.user?.username}</p>
              <div>
                  <button  type="button" onClick={() => likeHandle(params.id)}>
                      Like: {postDetail.like_count}
                  </button>
                  <p>Comments: {postDetail.comment_count}</p>
              </div>
          </div>
      </div>
      <div className={styles.post_id__comments_block}></div>
    </div>
  )
}

export default page