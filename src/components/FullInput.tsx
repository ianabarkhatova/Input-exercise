// @flow 
import * as React from 'react';
import {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addText: (text: string) => void
};

export const FullInput = (props: FullInputPropsType) => {
    let[text, setText] = useState('')


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addText(text)
        setText('')
    }

    return (
        <div>
            <input value={text} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};