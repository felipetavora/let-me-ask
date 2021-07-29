import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss';

//Create Component button with attributes
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { isOutLined?: boolean };

export function Button({ isOutLined = false, ...props }: ButtonProps) {

    return (
        <button className={`button ${isOutLined ? 'outlined' : ''}`}
            {...props}>
        </button>
    )
}