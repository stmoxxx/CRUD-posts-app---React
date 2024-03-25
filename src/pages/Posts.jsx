import React, {useEffect, useState} from "react";
import {usePosts} from "../hooks/usePost";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getCountedPages} from "../utils/pages";
import MyButton from "../Components/UI/button/MyButton";
import MyModal from "../Components/UI/MyModal/MyModal";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import Loader from "../Components/UI/Loader/Loader";
import PostList from "../Components/PostList";
import Pagination from "../Components/UI/pagination/Pagination";



function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', search: ''})
    const [modal, setModal] = useState('false')
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.search)

    const changePage = (page) => {
        setPage(page)
    }

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getCountedPages(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    // Получаем posts из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    return (
        <div className="App">
            <button onClick={fetchPosts}>GET POSTS</button>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Create new post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postsError && <h1>Shit happens... {postsError}</h1>}

            <PostList remove={removePost} posts={sortedAndSearchedPost} title={'JavaScript'}/>
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                    <Loader/>
                </div>
            }

            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />

        </div>
    );
}

export default Posts;