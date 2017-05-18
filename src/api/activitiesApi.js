class ActivitiesApi {
	static getActivitiesApi(){
		return new Promise((resolve, reject) => {
			resolve({
				activitiesList:[
					{title: 'Activity 1', description: 'Somebody created something', type: 'created', id:1},
					{title: 'Activity 2', description: 'Somebody deleted something', type: 'deleted', id:2},
					{title: 'Activity 3', description: 'Something is broken', type: 'breakage', id:3},
					{title: 'Activity 4', description: 'Task(?)', type: 'task', id:4}
				]
			});
		});
	};
}

export default ActivitiesApi;