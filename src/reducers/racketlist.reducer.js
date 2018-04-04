import {Map} from 'immutable';
import {racketlistConstants} from '../constants/constants';

function setState(state, newState) {
    return state.merge(newState);
}

function registerNewRacket(state, newState) {
    const newEntry = {
        'id': newState.response.data.insertId,
        'name': newState.requestData.name,
        'manufacturer': newState.requestData.manufacturer,
        'release_year': newState.requestData.release_year
    }
    const nextState = state.set('rackets', state.get('rackets').push(Map(newEntry)));
    return nextState;
}
function getRacketList(state, newState) {
    const nextState = state.set('rackets', state.get('rackets').merge(newState.response.data));
    return nextState;
}

export function racketlistReducer(state = Map(), action) {

    switch (action.type) {
        case racketlistConstants.SET_STATE_RACKETLIST:
            return setState(state, action.state);
        case racketlistConstants.REGISTER_NEW_RACKET + '_FULFILLED':
            return registerNewRacket(state, action.payload);
        case racketlistConstants.GET_RACKET_LIST + '_FULFILLED':
            return getRacketList(state, action.payload);
        default:
            return state;
    }
}
