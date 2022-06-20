import { Routes, Route } from 'react-router-dom';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import LogoutPage from '../pages/LogoutPage/LogoutPage';
import MainPage from '../pages/MainPage/MainPage';
import PersonalPage from '../pages/PersonalPage/PersonalPage';

export function Router({onChangeIsOpenModal, user, setUser}) {
    return (
        <Routes>
            <Route path='/'>
                <Route index element={<MainPage onChangeIsOpenModal={onChangeIsOpenModal} user={user} />} />
                <Route path='contacts' element={<ContactsPage />} />
                <Route path='personal' element={<PersonalPage user={user} />} />
                <Route path='/logout' element={<LogoutPage setUser={setUser} />} />
            </Route>
        </Routes>
    );
};