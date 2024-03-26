import { useAppDispatch } from "../../hook";
import { useState } from "react";
import { addUser } from "../../features/messanger/messangerSlice";
import { Link } from "react-router-dom";
import { SliderPicker } from "react-color";

const NewUserForm = (): JSX.Element => {
    const [user, setUser] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const dispatch = useAppDispatch();

    return (
        <form className="flex flex-col" action="">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                value={user}
                onChange={(event) => setUser(event.target.value)}
                placeholder="enter user's name"
                required
                className="border-b outline-none"
            />
            <label htmlFor="color">Color:</label>
            <div className="mx-8">
                <SliderPicker
                    color={color}
                    onChangeComplete={(color) => setColor(color.hex)}
                />
            </div>
            <div className="flex justify-center mt-5">
                <button
                    className="py-2 m-auto px-3 duration-300 ease-out font-bold bg-black text-white hover:bg-slate-800"
                    type="submit"
                    onClick={() =>
                        user !== "" ? (
                            dispatch(addUser({ name: user, color: color, id: 0}))
                        ) : (
                            <></>
                        )
                    }
                >
                    <Link to="/">Add</Link>
                </button>
            </div>
        </form>
    );
};

export default NewUserForm;
