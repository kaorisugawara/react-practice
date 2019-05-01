import * as actionType from "../../util/actionTypes";

const initialState = {
    inputValue: 0,
    resultValue: 0,
    showingResult: false
}

const calclator = (state = initialState, action) => {
    if (action.type === actionType.INPUT_NUMBER) {
        return {
            ...state,
            inputValue: state.inputValue * 10 + action.number,
            showingResult: false
        }
    } else if (action.type === actionType.PLUS) {
        return {
            ...state,
            inputValue: 0,
            resultValue: state.inputValue + state.resultValue,
            showingResult: true
        }
    } else if (action.type === actionType.MINUS) {
        return {
            ...state,
            inputValue: 0,
            resultValue: state.inputValue - state.resultValue,
            showingResult: true
        }
    } else if (action.type === actionType.RESET) {
        return {
            ...state,
            inputValue: 0,
            resultValue: 0,
            showingResult: true
        }
    } else {
        return state
    }
}

export default calclator;