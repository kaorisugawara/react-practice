import * as actionTypes from '../util/actionTypes';

//電卓
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

//シェアボタン
export const onShareClick = () => ({
    type: actionTypes.SHARE
})

export const onTwitter = () => ({
    type: actionTypes.TWITTER
})

export const onFacebook = () => ({
    type:actionTypes.FACEBOOK
})

export const onCopyURL = () => ({
    type:actionTypes.COPYURL
})

export const onShareDialogClose = () => ({
    type: actionTypes.DIALOG_CLOSE
})