import { useSelector } from "react-redux";
import Message from "./Message";

const MessagesPanel = () => {
    const messages = useSelector((state) => state.messanger.messages);

    return (
        <div className="px-5 pt-5 bg-slate-100 h-full">
            {messages.map((message) => (
                <Message senderId={message.sender} message={message.message} />
            ))}
        </div>
    );
};

export default MessagesPanel;
