import React from 'react'
import { IPost } from '../redux/types'

interface IPostItem {
    post: IPost,
    remove: (post: IPost) => void
    update: (post: IPost) => void
}

const PostItem: React.FC<IPostItem> = ({ post, remove, update }) => {

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation()
        remove(post)
    }

    const handleUpdte = (e: React.MouseEvent) => {
        const title = prompt() || ""
        update({ ...post, title })
    }

    return (
        <div onClick={handleUpdte}>
            <h2> {post.id}){post.title} </h2>
            <p> {post.body} </p>
            <button onClick={handleRemove}> delete </button>
            <hr/> 
        </div>
    )
}

export default PostItem
