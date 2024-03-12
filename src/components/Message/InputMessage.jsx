import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../features/messanger/messangerSlice";
import { Send } from "react-feather";

const InputMessage = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    return (
        <div className="flex h-12 border-t-2">
            <input
                className="w-full outline-none"
                placeholder="Enter message"
                type="text"
                onChange={(event) => setMessage(event.target.value)}
                value={message}
            />
            <button
                className="w-1/12 duration-300 ease-out font-bold bg-black text-white hover:bg-slate-600"
                onClick={() => {
                    dispatch(addMessage(message))
                    setMessage('')
                }}
            >
                <Send className="m-auto"/>
            </button>
        </div>
    );
};

export default InputMessage;
