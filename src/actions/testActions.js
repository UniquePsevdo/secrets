import TestApi from '../api/testApi';
import * as types from './actionType';

function getTestSuccess(data) {
	return {type: types.GET_TEST, payload: data}
}

export const getTest = () => {
	return dispatch => {
		TestApi.getTest().then((data) => {
			dispatch(getTestSuccess(data));
		}).catch((error) => {
			throw(error);
		})
	};
}