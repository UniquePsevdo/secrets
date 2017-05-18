import {GET_TEST} from '../actions/actionType';
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_TEST :
			return Object.assign({}, state, {testList: action.payload.testList})
	}
	return state;
}