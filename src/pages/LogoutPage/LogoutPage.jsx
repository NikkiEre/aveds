import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutPage({setUser}) {
    const navigation = useNavigate();

    useEffect(() => {                                                                              // Изменение состояний при разлогировании
        sessionStorage.setItem('auth', JSON.stringify({name: ''}));
        setUser('');
        navigation('/');
    }, [setUser, navigation]);
    
    return (
        <></>
    );
}