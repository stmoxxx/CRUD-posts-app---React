import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";

const PostIdPage = () => {

    const postParams = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(postParams.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(postParams.id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(postParams.id)
        fetchComments(postParams.id)
    }, [])
    return (
        <div>
            <h2>
                You've opened post by id {postParams.id}!
            </h2>
            {isLoading
                ? <Loader/>
                : <div> {post.id}. {post.title} </div>
            }<br/>
            <h2>
                Commentaries:
            </h2>
            {isComLoading
                ? <Loader/>
                : <div > {comments.map(comm =>
                    <div style={{marginTop: 15}} key={comm.id}>
                        <h5 > Email: {comm.email}</h5>
                        <div >Commentary{comm.body}</div>
                    </div>
                )}
                </div>
            }
        </div>

    );
};

export default PostIdPage;