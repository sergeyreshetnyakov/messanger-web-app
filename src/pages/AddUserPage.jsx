import NewUserForm from "../components/User/NewUserForm";

const AddUserPage = () => {
    return (
        <div className="bg-slate-200 h-screen">
            <div className="m-auto bg-white h-screen shadow-xl pt-12 px-6 w-3/5">
                <h1 className="text-2xl flex justify-center">Add User</h1>
                <NewUserForm />
            </div>
        </div>
    );
};

export default AddUserPage;
