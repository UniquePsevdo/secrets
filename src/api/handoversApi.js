class HandoversApi {
	static getHandoversApi(){
		return new Promise((resolve, reject) => {
			resolve({
				handoversList:[
					{title: 'Handover 1', shortDesc: 'shortDesc 1', fullDesc: 'fullDesc 1', imgUrl:'assets/images/office.jpg'},
					{title: 'Handover 2', shortDesc: 'shortDesc 2', fullDesc: 'fullDesc 2', imgUrl:'assets/images/washing-machine.jpg'},
					{title: 'Handover 3', shortDesc: 'shortDesc 3', fullDesc: 'fullDesc 3', imgUrl:'assets/images/office.jpg'},
					{title: 'Handover 4', shortDesc: 'shortDesc 4', fullDesc: 'fullDesc 4', imgUrl:'assets/images/washing-machine.jpg'}
				]
			});
		});
	};
}

export default HandoversApi;