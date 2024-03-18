import UserOpenButton from "../User/UserOpenButton";
import Message from "./Message";
import { useSelector } from "react-redux";

const MessagesPanel = () => {
    const messages = useSelector((state) => state.messanger.messages);

    return (
        <div className="px-5 pt-5 bg-slate-100 max-lg:w-screen h-[95vh]">
            <div className="lg:hidden">
                <UserOpenButton isOpen={false}/>
            </div>
            {messages.map((message) => (
                <Message senderId={message.sender} message={message.message} />
            ))}
        </div>
    );
};

export default MessagesPanel;
