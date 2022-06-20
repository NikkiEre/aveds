import { useCallback, useState } from 'react';
import { Button } from '../Button/Button';
import './Form.css';

export function Form({inputTextFields, setInputTextFields, isError, setIsError, authUser}) {
    const [messages, setMessages] = useState({login: '', password: ''});

    const onChangeMessages = useCallback((e) => {
        let inputName = e.target.getAttribute('name');
        messages[inputName] = inputTextFields[inputName].trim().length < 6 && 'Количество символов должно быть больше 6';
        setMessages(messages);
    }, [inputTextFields, messages, setMessages]);

    const onChangeError = useCallback((e) => {
        let inputName = e.target.getAttribute('name');
        inputName = inputName[0].toLocaleUpperCase() + inputName.substr(1);
        isError[`isError${inputName}`] = false;
        setIsError(isError);
    }, [isError, setIsError]);
    
    const OnChangeTextFields = useCallback((e) => {
        onChangeError(e);
        onChangeMessages(e);
        const inputName = e.target.getAttribute('name');
        inputTextFields[inputName] = e.target.value;
        setInputTextFields({...inputTextFields});
    }, [inputTextFields, setInputTextFields, onChangeError, onChangeMessages]);

    return (
        <form className="form">
            <h5 className="form__title">Authorization</h5>
            <input 
                className={`form__input ${isError.isErrorLogin && 'form__input_error'}`}
                type='text'
                name="login"
                placeholder="Login"
                value={inputTextFields.login}
                onChange={OnChangeTextFields}
            />
            {messages.login && <p className='form__error'>{messages.login}</p>}

            <input 
                className={`form__input ${isError.isErrorPassword && 'form__input_error'}`}
                type='text'
                name="password"
                placeholder="Password"
                value={inputTextFields.password}
                onChange={OnChangeTextFields}
            />
            {messages.password && <p className='form__error'>{messages.password}</p>}

            <Button placeholder='Войти' color='orange' onClick={authUser} />
            {isError.isErrorSubmit && <p className='form__error'>Ошибка данных. Попробуйте еще раз</p>}
        </form>
    )
}