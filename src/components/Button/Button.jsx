import './Button.css';

export function Button({placeholder, color, onClick}) {
    return (
        <button onClick={onClick} className={`button button_${color}`}>
            {placeholder}
        </button>
    );
}