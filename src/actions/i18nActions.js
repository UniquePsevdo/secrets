import * as types from './actionType';

export const setLanguage = (lang)=>{
	switch(lang){
		case 'en':
			return {type: types.GET_ENGLISH};
		case 'de':
			return {type: types.GET_DEUTSCH};
	}
}