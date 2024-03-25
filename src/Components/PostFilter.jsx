import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.search}
                onChange={e => setFilter({...filter, search: e.target.value})}
                placeholder={'Поиск...'}
            />
            <div>
                <MySelect
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue={'Sort By'} options={[
                    {value: 'title', name: 'By Title'},
                    {value: 'body', name: 'By description'}
                ]}/>
            </div>
        </div>

    );
};

export default PostFilter;