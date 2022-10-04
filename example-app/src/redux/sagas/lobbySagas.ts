import { ResponseGenerator } from './../../utils/common';
import { takeEvery, takeLatest, take, put, call, fork, all, select, delay } from 'redux-saga/effects'
import axios from 'axios'
import * as actionTypes from '../ActionTypes'
import { exampleFailed, exampleSucceeded } from '../actions/lobbyActions';
import * as httpHelpers from '../../utils/http';
export const lobbySagas = [
    fork(watchExampleRequestedSaga)
]

export function* watchExampleRequestedSaga() {
    yield takeEvery(actionTypes.EXAMPLE_REQUESTED, workerExampleRequestedSaga);
}
export function* workerExampleRequestedSaga(action: any) {
    try {
        console.log("FETCH_CATEGORIES_REQUESTED");
        const data:ResponseGenerator = yield call(() => httpHelpers.get(`/pokemon/ditto`));
        if (data.status == 200) {
            yield put(exampleSucceeded(data.data.name));
            // console.log(data.data);
        } else {
            yield put(exampleFailed(data.data));
        }
    } catch (error) {
        console.log(error);
        yield put(exampleFailed(error));
    }
}
