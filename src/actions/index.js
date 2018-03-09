import {actionTypes} from '../constants/actionTypes';
import axios from 'axios';

const rest = actionTypes.rest;

export const getTasks = () => async dispatch => {
	const {data: tasks} = await axios.get(`${rest}/tasks`);
	dispatch({
		type: actionTypes.GET_TASKS,
		payload: tasks
	});
};

export const fetching = (isFetching) => (dispatch) => {
	dispatch({
		type: actionTypes.FETCHING,
		payload: isFetching
	});
};

export const deleteTask = (id) => (dispatch) => {
	dispatch({
		type: actionTypes.DELETE_TASK,
		payload: id
	})
};

export function saveTask(task) {
	return async dispatch => {
		dispatch(fetching(true));
		const {data} = await axios.put(`${rest}/task`, task);
		dispatch({
			type: actionTypes.SAVE_TASK,
			payload: data
		});
		dispatch(fetching(false));
	}
}

export function toggleDone(findingId) {
	return async dispatch => {
		const {data} = await axios.put(`${rest}/toggle-task`, {id: findingId});
		let { id, isDone } = data;
		dispatch({
			type: actionTypes.TOGGLE_TASK,
			payload: {id, isDone}
		});
	};
}

export function addTask(content) {
	return async dispatch => {
		dispatch(fetching(true));
		const {data: task} = await axios.post(`${rest}/task`, {content});
		dispatch({
			type: actionTypes.ADD_TASK,
			payload: task
		});
		dispatch(fetching(false));
	};
}