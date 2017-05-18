class TasksApi {
	static getTasksApi(){
		return new Promise((resolve, reject) => {
			resolve({
				tasksList:[
					{title: 'Task 1', location: 'Room 1', id:1, description: 'description 1', status: 'open'},
					{title: 'Task 2', location: 'Room 2', id:2, description: 'description 2', status: 'closed'},
					{title: 'Task 3', location: 'Room 3', id:3, description: 'description 3', status: 'closed'},
					{title: 'Task 4', location: 'Room 4', id:4, description: 'description 4', status: 'open'}
				]
			});
		});
	};
	
	static openTaskApi(task){
		return new Promise((resolve, reject) => {
			resolve({id:task.id});
		});
	};
	
	static closeTaskApi(task){
		return new Promise((resolve, reject) => {
			resolve({id:task.id});
		});
	};
}

export default TasksApi;