import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { Modal } from './components/Modal/Modal';
import authData from './authData.json';
import { Router } from './router/Router';

function App() {
  const [isError, setIsError] = useState({                                                                   // Состояние ошибок
    isErrorLogin: false, isErrorPassword: false, isErrorSubmit: false
  });
  const [inputTextFields, setInputTextFields] = useState({login: '', password: ''});                         // Состояние полей формы
  const [user, setUser] = useState(null);                                                                    // Состояние юзера
  const [isOpenModal, setIsOpenModal] = useState(false);                                                     // Состояние модального окна

  const onChangeIsOpenModal = useCallback(() => {                                                            // Функция изменения состояние модального окна
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal, setIsOpenModal]);

  const authUser = useCallback((e) => {                                                                      // Функция авторизации
    e.preventDefault();
    if(
      authData.login === inputTextFields.login && authData.password === inputTextFields.password
    ) {
      setUser(authData.name);
      sessionStorage.setItem('auth', JSON.stringify({name: authData.name}));
      setInputTextFields({login: '', password: ''});
      onChangeIsOpenModal();
    } else {
      setIsError({isErrorLogin: true, isErrorPassword: true, isErrorSubmit: true});
      setInputTextFields({login: '', password: ''});
    }
  }, [setIsError, inputTextFields, onChangeIsOpenModal]);

  useEffect(() => {                                                                                          // Функция проверки и сеттера состояния из сессии
    if(sessionStorage.getItem('auth') && JSON.parse(sessionStorage.getItem('auth'))) {
      setUser(JSON.parse(sessionStorage.getItem('auth')).name);
    }
  }, [setUser]);

  return (
    <div className="app">
      <Header 
        onChangeIsOpenModal={onChangeIsOpenModal}
        user={user}
      />
      <main className='app__main'>

        <Router
          onChangeIsOpenModal={onChangeIsOpenModal}
          user={user}
          setUser={setUser}
        />

        { isOpenModal &&
          <Modal>
            <Form
              inputTextFields={inputTextFields}
              setInputTextFields={setInputTextFields}
              isError={isError}
              setIsError={setIsError}
              authUser={authUser}
            />
          </Modal>
        }

      </main>
    </div>
  );
}

export default App;
