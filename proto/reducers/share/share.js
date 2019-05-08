import * as actionType from "../../util/actionTypes";

const initialState = {
    shareDialogOpen: false,
    copied: false,
    value: 'bbb'
}

const share = (state = initialState, action) => {
    if (action.type === actionType.SHARE) {
        return {
            ...state,
            shareDialogOpen: true
        }
    } else if (action.type === actionType.TWITTER) {
        return {
            ...state,
            shareDialogOpen: false
        }
    } else if (action.type === actionType.FACEBOOK) {
        return {
            ...state,
            shareDialogOpen: false
        }
    } else if (action.type === actionType.COPYURL) {
        return {
            ...state,
            shareDialogOpen: true,
            copied: true,
            value: 'http://localhost:8080/'
        }
    } else if (action.type === actionType.DIALOG_CLOSE) {
        return {
            ...state,
            shareDialogOpen: false
        }
    } else {
        return {
            state
        }
    }
}

export default share;