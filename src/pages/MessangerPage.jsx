import UserBoard from "../components/User/UserBoard";
import MessagesPanel from "../components/Message/MessagesPanel";
import InputMessage from "../components/Message/InputMessage";

const MessangerPage = () => {
    return (
        <div className="flex">
            <div className="w-1/4">
                <UserBoard />
            </div>
            <div className="flex flex-col justify-between w-full">
                <MessagesPanel />
                <InputMessage />
            </div>
        </div>
    );
};

export default MessangerPage;
