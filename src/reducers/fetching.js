import {actionTypes} from "../constants/actionTypes"

export default function fetching(state = false, { type, payload }) {
	switch(type) {
		case actionTypes.FETCHING:
			return payload;

		default:
			return state;
	}
}