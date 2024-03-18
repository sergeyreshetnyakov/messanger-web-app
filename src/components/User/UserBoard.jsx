import { useSelector } from "react-redux";
import { useState } from "react";
import { Edit } from "react-feather";
import UserOpenButton from "./UserOpenButton";
import AddUserButton from "./AddUserButton";
import User from "./User";

const UserBoard = () => {
    const users = useSelector((state) => state.messanger.users);
    const [editMode, setEditMode] = useState(false);

    return (
        <div className="flex flex-col text-center h-screen border-r-2 shadow-xl">
            <div className="flex justify-end lg:hidden py-2 px-3">
                <UserOpenButton isOpen={true}/>
            </div>
            {users.map((user) => (
                <User userData={user} isEditing={editMode} />
            ))}
            <AddUserButton />
            <div className="flex justify-end">
                <button
                    className="flex w-full justify-center my-6"
                    onClick={ () => setEditMode(!editMode)}
                >
                    <div className="py-2 px-3 duration-300 ease-out hover:bg-slate-400 hover:text-white">
                        <Edit />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default UserBoard;
