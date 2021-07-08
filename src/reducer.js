import * as actionTypes from './actionTypes';

let index=0
export default function reducer(state = [],action){

    switch(action.type){
        case actionTypes.ADD_ISSUE:
            return [
                ...state,
                {
                    id: ++index,
                    description: action.payload.description,
                    resolved :false
                }
            ]
        case actionTypes.REMOVED_ISSUE:
            return state.filter(i => i.id !== action.payload.id)

        case actionTypes.RESOLVE_ISSUE:
            return state.map( i => {
                if(i.id === action.payload.id) {
                    return {
                        ...i,
                        resolved:true
                    }
                }
                return i;
            })
        default: state   
    }
}