import {GET_HANDOVERS} from '../actions/actionType';
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_HANDOVERS :
			return Object.assign({}, state, {handoversList: action.payload.handoversList});
	}
	return state;
}
