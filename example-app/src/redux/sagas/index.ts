import { takeEvery, takeLatest, take, put, call, fork, all } from 'redux-saga/effects'
import { lobbySagas } from './lobbySagas'

export default function* rootSaga() {
    yield all([
        ...lobbySagas
    ])
}