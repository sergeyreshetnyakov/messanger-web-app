import { Link } from 'react-router-dom';
import { Menu, X } from 'react-feather';

const UserOpenButton = ({ isOpen }) => {
    return (
        <div>
            {isOpen ? (<Link to={"/"}><X /></Link>) : (<Link to={'mobileUserMenu'}><Menu /></Link>)}
        </div>
    )
}

export default UserOpenButton;