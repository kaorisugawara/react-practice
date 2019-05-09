import { all } from "redux-saga/effects";
import user_fetch from "./testSagaEffects";

function* rootSaga() {
    yield all([
        ...user_fetch,
    ]);
};

export default rootSaga;