// action creators

import * as actionTypes from './actionTypes';

export function addIssue(description){
    return {
        type: actionTypes.ADD_ISSUE,
        payload:{
            description
        }
    }
}

export function removeIssue(id) {
    return {
        type: actionTypes.RESOLVE_ISSUE,
        payload:{
            id
        }
    }
}

export function resolveIssue(id) {
    return {
        type: actionTypes.RESOLVE_ISSUE,
        payload:{
            id
        }
    }
}