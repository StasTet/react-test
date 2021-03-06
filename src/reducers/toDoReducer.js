import { ADD_TODO, DEL_TODO } from '../constants'
import _ from 'lodash';

export default function reducer(state = [], action) {
    switch(action.type) {

        case ADD_TODO:
            return [ ...state, action.payload ];

        case DEL_TODO:

            const elIndex = _.findIndex(state, function(obj) { return obj.id == action.payload})

            return [
                ...state.slice(0, elIndex),
                ...state.slice(elIndex + 1)
            ]
            
        default:
            return state;
    }
}