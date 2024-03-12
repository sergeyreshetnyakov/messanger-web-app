import { Link } from "react-router-dom";

const AddUserButton = () => {
    return (
        <Link
            className="mx-4 text-2xl border-2 border-black hover:bg-black hover:text-white duration-300 ease-out font-bold"
            to="AddUser"
        >
            +
        </Link>
    );
};

export default AddUserButton;
