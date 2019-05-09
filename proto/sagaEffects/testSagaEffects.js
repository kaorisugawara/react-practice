import axios from "axios";
import { put, call, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../util/actionTypes";

function* fetchUser(action) {
    const page = action.payload.page;
    const { member, error } = yield call(getUrlList, page);
    if (member) {
        yield put({type: actionTypes.USER_FETCH_SUCCEEDED, member: member});
    } else {
        console.log("error occurred");
        yield put({type: actionTypes.USER_FETCH_FAILED, error: error});
    }
}

function getUrlList(page) {
    return axios({
        method: 'get',
        url: 'https://api.myjson.com/bins/12voya',
        params: {
            page
        },
    }).then((result) => {
        const member = result.data.member;
        return { member };
    }).catch(error => { error })
}

const user_fetch = [takeEvery("USER_FETCH_REQUESTED", fetchUser)];

export default user_fetch;