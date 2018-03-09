import { combineReducers } from 'redux';
import tasks from './tasks';
import categories from './categories';
import fetching from './fetching';

export default combineReducers({
	tasks,
	categories,
	fetching
})
