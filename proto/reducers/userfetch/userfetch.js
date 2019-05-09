import * as actionType from "../../util/actionTypes";

const initialState = {
    member: [],
    error: [],
}

const userfetch = (state = initialState, action) => {
    if (action.type === actionType.USER_FETCH_SUCCEEDED) {
        return {
            ...state,
            member: action.member
        }
    } else if (action.type === actionType.USER_FETCH_FAILED) {
        return {
            ...state,
            error: action.error
        }
    } else {
        return state
    }
}

export default userfetch;