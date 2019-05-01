import * as actionTypes from '../util/actionTypes';

export const onNumClick = (number) => ({
    type: actionTypes.INPUT_NUMBER,number
})

export const onPlusClick = () => ({
    type: actionTypes.PLUS
})

export const onMinusClick = () => ({
    type: actionTypes.MINUS
})

export const onResetClick = () => ({
    type: actionTypes.RESET
})