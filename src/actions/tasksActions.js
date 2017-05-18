import TasksApi from '../api/tasksApi';
import * as types from './actionType';

function getTasksSuccess(data) {
	return {type: types.GET_TASKS, payload: data};
}

export const getTasks = () => {
	return dispatch => {
		TasksApi.getTasksApi().then((data) => {
			dispatch(getTasksSuccess(data));
		}).catch((error) => {
			throw(error);
		})
	};
}

function closeTaskSuccess(data) {
	return {type: types.CLOSE_TASK, payload: data};
}

export const closeTask = (task) => {
	return dispatch => {
		TasksApi.closeTaskApi(task).then((data) => {
			dispatch(closeTaskSuccess(data));
		}).catch((error) => {
			throw(error);
		})
	};
}

function openTaskSuccess(data) {
	return {type: types.OPEN_TASK, payload: data};
}

export const openTask = (task) => {
	return dispatch => {
		TasksApi.openTaskApi(task).then((data) => {
			dispatch(openTaskSuccess(data));
		}).catch((error) => {
			throw(error);
		})
	};
}