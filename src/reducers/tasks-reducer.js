import {GET_TASKS, OPEN_TASK, CLOSE_TASK} from '../actions/actionType';
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
	let tasksList;
	switch (action.type) {
		case GET_TASKS :
			return Object.assign({}, state, {tasksList: action.payload.tasksList});
		case OPEN_TASK:
			tasksList = JSON.parse(JSON.stringify(state.tasksList));
			for(let i=0; i < tasksList.length; i++){
				if(tasksList[i].id===action.payload.id){
					tasksList[i].status = 'open';
					break;
				}
			}
			return Object.assign({}, state, {tasksList:tasksList});
		case CLOSE_TASK:
			tasksList = JSON.parse(JSON.stringify(state.tasksList));
			for(let i=0; i < tasksList.length; i++){
				if(tasksList[i].id===action.payload.id){
					tasksList[i].status = 'closed';
					break;
				}
			}
			return Object.assign({}, state, {tasksList:tasksList});
	}
	return state;
}
