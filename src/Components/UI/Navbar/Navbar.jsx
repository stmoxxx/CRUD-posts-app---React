import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <div className={'navbar_links'}>
                <Link to={"/about"}>About</Link>
                <Link to={"/posts"}>Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;