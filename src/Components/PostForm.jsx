import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }
    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}

                type={"text"}
                placeholder={"Enter Title"}
            />
            {/*Неуправляемый компонент*/}
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}

                type={"text"}
                placeholder={"Enter Text"}
            />
            <MyButton onClick={addNewPost}>Save post</MyButton>
        </form>
    );
};

export default PostForm;