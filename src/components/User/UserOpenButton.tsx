import { Link } from 'react-router-dom';
import { Menu, X } from 'react-feather';

type UserOpenButtonProps = {
    isOpen: boolean;
}
const UserOpenButton = ({ isOpen }: UserOpenButtonProps): JSX.Element => {
    return (
        <div>
            {isOpen ? (<Link to={"/"}><X /></Link>) : (<Link to={'mobileUserMenu'}><Menu /></Link>)}
        </div>
    )
}

export default UserOpenButton;