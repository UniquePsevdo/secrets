import {GET_ENGLISH, GET_DEUTSCH} from '../actions/actionType';
import en from '../i18n/en';
import de from '../i18n/de';
const INITIAL_STATE = en;

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_ENGLISH :
			return Object.assign({}, state, en);
		case GET_DEUTSCH :
			return Object.assign({}, state, de);
	}
	return state;
}