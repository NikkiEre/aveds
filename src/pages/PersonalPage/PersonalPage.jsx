import { useEffect } from "react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { button_list } from "../../button_list";
import { Main } from "../../components/Main/Main";

export default function PersonalPage({user}) {
    const navigation = useNavigate();

    const buttons = useMemo(() => {
            return button_list.filter(                                                                       // Функция получения необходимых кнопок для страницы
                (btn) => btn.placeholder === 'Выйти из аккаунта' || btn.placeholder === 'Перейти в контакты'
            )
    }, []);

    useEffect(() => {                                                                                        // Если юзер не авторизован, то он не попадет в личный кабинет
        if(!user) navigation('/');
    }, [navigation, user]);

    return (
        <Main 
            buttons={buttons}
            title={`Привет, ${user}`}
        />
    );
};