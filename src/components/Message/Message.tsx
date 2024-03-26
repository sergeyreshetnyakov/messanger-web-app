import { useAppSelector } from "../../hook";

type IMessage = {
    senderId: number;
    message: string;
}
const Message = ({ senderId, message }: IMessage): JSX.Element => {
    const currentUser = useAppSelector((state) => state.messanger.currentUser);
    const users = useAppSelector((state) => state.messanger.users);

    const color = users[senderId].color
    return (
        <>
            {senderId === currentUser ? (
                <div className="flex justify-end my-2">
                    <div className="flex flex-col bg-zinc-200 shadow rounded-xl px-3 py-2">
                        <h3 style={{ color: color}}>
                            {users[senderId].name}
                        </h3>
                        <span>{message}</span>
                    </div>
                </div>
            ) : (
                <div className="flex justify-start">
                    <div className=" my-2 flex flex-col shadow bg-zinc-300 rounded-xl px-3 py-2">
                        <h3 style={{ color: color}}>{users[senderId].name}</h3>
                        <span>{message}</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Message;
