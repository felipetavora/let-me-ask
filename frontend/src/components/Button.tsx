import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss';

//Create Component button with attributes
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {

    return (
        <button className="button" {...props}></button>
    )
}