import React from 'react';
import { Link } from 'react-router-dom';

function Navbar (props) {
    return(
        <nav>
            {(props.user) ?
                <div>
                    <button>{props.user}</button>
                    <button onclick={props.logout}>Logout</button>
                </div>
                :
                <div>
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </div>
            }
        </nav>
    )
}

export default Navbar;