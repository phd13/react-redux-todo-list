import {actionTypes} from '../constants/actionTypes';

export default (state = [], { type, payload }) => {
	switch (type) {
		case actionTypes.ADD_TASK:
			return [...state, payload];

		case actionTypes.DELETE_TASK: {
			const tasks = state.filter(item => item.id !== payload);
			return [...tasks];
		}

		case actionTypes.GET_TASKS:
			return payload;

		case actionTypes.SAVE_TASK: {
			const { id } = payload;
			const tasks = state.map(item => {
				if (item.id === id) {
					item = payload;
				}
				return item;
			});
			return [...tasks];
		}

		case actionTypes.TOGGLE_TASK: {
			const { id, isDone } = payload;
			const tasks = state.map(item => {
				if (item.id === id) {
					item.isDone = isDone;
				}
				return item;
			});
			return [...tasks];
		}

		default:
			return state;
	}
};
