import React, { useEffect, useState } from 'react'
import { IPost } from '../redux/types'
import { postsAPI } from '../services/PostService'
import PostItem from './PostItem'

const Post: React.FC = () => {
    const [limit, setLimit] = useState(10)
    const { data: posts, isLoading, error, refetch } = postsAPI.useFetchAllPostsQuery(limit,
        // {
        //     pollingInterval: 1000 //to update the state every second
        // }
    )
    const [createPost, {}] = postsAPI.useCreatePostMutation()
    const [updadePost, {}] = postsAPI.useUpdatePostMutation()
    const [deletePost, {}] = postsAPI.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({ title, body: title } as IPost)
    }

    const handleRemove = (post: IPost) => {
        updadePost(post)
    }

    const handleUpdate = (post: IPost) => {
        deletePost(post)
    }

    return (
        <div>
            {isLoading && <h2> Loading... </h2>}
            {error && <p> Errorrrrr!!!! </p>}
            {posts?.map(post => (
                <PostItem
                    post={post}
                    key={post.id}
                    remove={handleRemove}
                    update={handleUpdate}
                />
            ))}
            <button onClick={handleCreate}> add post </button>
        </div>
    )
}

export default Post
