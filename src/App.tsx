import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserBoard from './components/User/UserBoard';
import MessangerPage from "./pages/MessangerPage";
import AddUserPage from "./pages/AddUserPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <MessangerPage />} />
                <Route path="AddUser" element={ <AddUserPage />}/>
                <Route path="mobileUserMenu" element={ <UserBoard /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
