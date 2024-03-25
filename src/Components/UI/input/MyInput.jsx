import React from 'react';
import pidor from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
        return (
            <input ref={ref} className={pidor.myInp} {...props}/>
        );
    }
);

export default MyInput;