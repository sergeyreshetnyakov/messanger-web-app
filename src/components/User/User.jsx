import { useDispatch, useSelector } from "react-redux";
import {
    changeCurrentUser,
    deleteUser,
} from "../../features/messanger/messangerSlice";
import { Trash2 } from "react-feather";

const User = ({ userData, isEditing }) => {
    const currentUser = useSelector((state) => state.messanger.currentUser);
    const dispatch = useDispatch();

    const usualStyle =
        "py-2 px-3 flex w-full duration-300 ease-out font-bold hover:bg-slate-400";
    const selectStyle =
        "py-2 px-3 flex w-full duration-300 ease-out font-bold bg-black text-white hover:bg-slate-800";

    return (
        <div className="flex mx-2 my-2 ">
            <button
                className={
                    userData.id === currentUser ? selectStyle : usualStyle
                }
                onClick={() => dispatch(changeCurrentUser(userData.id))}
            >
                {userData.name}
            </button>
            {isEditing ? (
                <div className="flex justify-end py-2 px-2 duration-300 ease-out hover:bg-slate-600 hover:text-white">
                    <button onClick={() => dispatch(deleteUser(userData.id))}>
                        <Trash2 />
                    </button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default User;
