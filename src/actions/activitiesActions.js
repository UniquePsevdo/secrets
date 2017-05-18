import ActivitiesApi from '../api/activitiesApi';
import * as types from './actionType';
import {addNotification as notify} from 'reapop';

function getActivitiesSuccess(data) {
	return {type: types.GET_ACTIVITIES, payload: data}
}

export const getActivities = () => {
	return dispatch => {
		ActivitiesApi.getActivitiesApi().then((data) => {
			dispatch(getActivitiesSuccess(data));
			dispatch(notify({
				title: 'Welcome',
				message: 'This is a test notification',
				status: 'success',
				dismissible: true,
				dismissAfter: 3000
			}));
		}).catch((error) => {
			throw(error);
		})
	};
}