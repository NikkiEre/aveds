import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export function Header({onChangeIsOpenModal, user}) {
    const navigation = useNavigate();

    return (
        <header className="header">
            <Link to='/' className='header__logo'>
                Logo
            </Link>

            <nav className='header__nav'>
                <Link to='/contacts' className='header__link'>Контакты</Link>
                <button className='header__btn' onClick={user ? () => navigation('/personal') : onChangeIsOpenModal}>
                    {user ? 'Выйти' : 'Войти'} 
                </button>
            </nav>
        </header>
    );
}