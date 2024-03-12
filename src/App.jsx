import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUserPage from "./pages/AddUserPage";
import MessangerPage from "./pages/MessangerPage";
import "./App.sass";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <MessangerPage />} />
                <Route path="AddUser" element={ <AddUserPage />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
