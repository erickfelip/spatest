import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ["btn--primary","btn--outline"]

const SIZES = ["btn--medium", "btn--large"] 

export const Button  = ({
children,
type,
onClick,
buttonStyle,
buttonSize}) => {
    const checkButtonSytle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize 
    : SIZES[0]

    return(
        <Link to="/sign-up" className="btn-mobile">
            <button
            className={`btn ${checkButtonSytle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    )
}
//{children}tudo que for colocado dentro do button irá renderizar. 
//dentro das const o botão será definido como maior ou menor
//quando for = estilo inclusos, se o componente tiver um button style.
//se for verdade = buttonStyle, se não o valor será 0