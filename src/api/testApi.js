class TestApi {
	static getTest(){
		return new Promise((resolve, reject) => {
			resolve({
				testList:[
					{name: 'name 1', value: 1},
					{name: 'name 2', value: 2},
					{name: 'name 3', value: 3}
				]
			});
		});
	};
}

export default TestApi;