import { useMemo } from "react";
import { CatalogList } from "../../components/CatalogList/CatalogList";
import { Main } from "../../components/Main/Main";
import { button_list } from "../../button_list";

export default function MainPage({onChangeIsOpenModal, user}) {
    const buttons = useMemo(() => {                                                                          // Функция получения определенных кнопок в зависимости от статуса юзера
        if(!user) {
            return button_list.filter(
                (btn) => btn.placeholder === 'Войти' || btn.placeholder === 'Контакты'
            )
        } else {
            return button_list.filter(
                (btn) => btn.placeholder === 'Выйти' || btn.placeholder === 'Контакты'
            )
        }
    }, [user]);

    return (
        <>
            <Main
                onChangeIsOpenModal={onChangeIsOpenModal}
                buttons={buttons}
                title={`Место для получения \n медицинской помощи`}
            />
            <CatalogList />
        </>

    )
}