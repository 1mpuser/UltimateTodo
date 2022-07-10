import { nanoid } from 'nanoid';
import React, {FC} from 'react';
import cl from './SendDataButton.module.css'

interface ISendDataButton{
    children : string;
    onClick: () => void;
    props? : any
}



const SendDataButton : FC<ISendDataButton> = ({children,...props}) => {
    const uniqueIdForButton = nanoid(23);
    return (
        <a className={cl.butt} id={uniqueIdForButton}{...props}>{children}</a>
    );
}

export default SendDataButton;