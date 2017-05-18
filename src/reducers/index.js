import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from "react-router-redux";
import TestReducer from "./test-reducer";
import ActivitiesReducer from "./activities-reducer";
import TasksReducer from "./tasks-reducer";
import HandoverReducer from "./handover-reducer";
import IntlProviderReducer from "./i18n-reducer";
import {reducer as notificationsReducer} from 'reapop';

export default combineReducers({
	form: formReducer,
	routing: routerReducer,
	test: TestReducer,
	activities: ActivitiesReducer,
	tasks: TasksReducer,
	handovers: HandoverReducer,
	locales: IntlProviderReducer,
	notifications: notificationsReducer()
});
