import React from 'react';
import zalupa from "./MyButton.module.css";

function MyButton({children, ...props}) {
    return (
        <button {...props} className={zalupa.myBtn}>
            {children}
        </button>
    );
}

export default MyButton;