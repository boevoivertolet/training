import React from 'react';

type DefaultButtonType = {
    title: string
    disabled?: boolean
    callBack: () => void


}
export const UniversalButton = (props: DefaultButtonType) => {
    const callBack = () => {props.callBack()}
    return<button disabled={props.disabled} onClick={callBack}>{props.title}</button>
}