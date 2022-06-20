import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Main.css';


export function Main({buttons ,onChangeIsOpenModal, title}) {
    const navigation = useNavigate();

    const getButtonFunction = useCallback((placeholder) => {
        switch (placeholder) {
            case 'Войти':
                return onChangeIsOpenModal;
            case 'Выйти':
                return () => navigation('/personal');
            case 'Контакты':
                return () => navigation('/contacts');
            case 'Перейти в контакты':
                return () => navigation('/contacts');
            case 'Выйти из аккаунта':
                return () => navigation('/logout');
            default:
                return null;
        }
    }, [navigation, onChangeIsOpenModal]);

    return (
        <div className="main">
            <h1 className="main__title">
                {title}
            </h1>
            <ul className="main__controls">
                {
                    buttons && buttons.map((btn) => 
                        <li key={btn.placeholder}>
                            <Button 
                                placeholder={btn.placeholder} 
                                color={btn.color} 
                                onClick={() => getButtonFunction(btn.placeholder)()} 
                            />
                        </li>)
                }
            </ul>

        </div>
    );
}