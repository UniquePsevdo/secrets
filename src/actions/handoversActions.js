import HandoversApi from '../api/handoversApi';
import * as types from './actionType';

function getHandoversSuccess(data) {
	return {type: types.GET_HANDOVERS, payload: data}
}

export const getHandovers = () => {
	return dispatch => {
		HandoversApi.getHandoversApi().then((data) => {
			dispatch(getHandoversSuccess(data));
		}).catch((error) => {
			throw(error);
		})
	};
}