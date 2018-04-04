import axios from 'axios';
import {racketlistConstants} from '../constants/constants';
import * as AuthService from '../helpers/auth';

export const racketlistActions = {
    registerNewRacket,
    getRacketList
};

function registerNewRacket(name, manufacturer, release_year) {
    const header = {
        authorization: `Bearer ${AuthService.getAccessToken()}`
    }
    const requestOptions = {
        method: 'get',
        url: ['https://mirrorpi.ddns.net/api/insert', name, manufacturer, release_year].join('/'),
        headers: header
    };

    const request = axios(requestOptions).then((response) => {
        return {
            response: response,
            requestData: {
                name: name,
                manufacturer: manufacturer,
                release_year: release_year
            },
            options: requestOptions
        }
    });

    return {type: racketlistConstants.REGISTER_NEW_RACKET, payload: request}

}

function getRacketList() {
    const header = {
        authorization: `Bearer ${AuthService.getAccessToken()}`
    }
    const requestOptions = {
        method: 'get',
        url: 'https://mirrorpi.ddns.net/api',
        headers: header
    };

    const request = axios(requestOptions).then((response) => {
        return {response: response, options: requestOptions}
    });

    return {type: racketlistConstants.GET_RACKET_LIST, payload: request}
}
