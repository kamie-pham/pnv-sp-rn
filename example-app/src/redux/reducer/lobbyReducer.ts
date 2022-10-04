import * as actionTypes from '../ActionTypes'
//import objectAssign = require('object-assign');
import {  CategoriesModel, globalSettingsModel, TournamentModel, LeaderboardModel, StoreListModel, userDetail } from '../models/models'
import axios from 'axios'
import { REHYDRATE } from 'redux-persist';

interface lobbyState {
    exampleValue: string|null;
}

const lobbyReducer = (state: lobbyState, action: any) => {
    let newState: lobbyState|null = null;

    switch (action.type) {
        case actionTypes.EXAMPLE_SUCCEEDED:
            newState = Object.assign({}, state, {
                ...state,
                exampleValue: action.payload
            });
            return newState;
        default:
            if (state) {
                newState = Object.assign({}, state);
            } else {
                newState = Object.assign({}, state, {
                    exampleValue: null
                });
            }
            return newState;
    }

}

export default lobbyReducer;