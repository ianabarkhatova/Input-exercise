import * as React from 'react';
import {text} from "node:stream/consumers";
import {ChangeEvent} from "react";

type InputPropsType = {
    setText: (title: string) => void
    text: string
};

export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setText(event.currentTarget.value)
    }

    return (
        <input value={props.text} onChange={onChangeInputHandler}/>
    );
};