import {GET_ACTIVITIES} from '../actions/actionType';
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_ACTIVITIES :
			return Object.assign({}, state, {activitiesList: action.payload.activitiesList});
	}
	return state;
}
