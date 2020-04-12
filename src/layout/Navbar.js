import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Navbar.css';


function Navbar (props) {
    return(
        <nav>
            <Button id="logo"><Link to="/" >Maker Market</Link></Button>
            {(props.user) ?
                <div>
                    <Button href="/profile">{props.user}</Button>
                    <Button onClick={props.logout}>Logout</Button>
                </div>
                :
                <div>
                    <Button><Link to='/register'>Register</Link></Button>
                    <Button><Link to='/login'>Login</Link></Button>
                </div>
            }
        </nav>
    )
}

export default Navbar;