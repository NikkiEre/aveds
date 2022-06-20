import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

const modalDOMElement = document.getElementById('modal');

export function Modal({children}) {
    const element = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        modalDOMElement.appendChild(element);

        return () => {
            modalDOMElement.removeChild(element);
        };
    }, [element]);

    return createPortal (
        children, element
    )
}