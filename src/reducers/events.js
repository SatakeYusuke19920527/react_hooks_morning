import { CREATE_EVENT } from '../actions';
import { DELETE_ALL_EVENTS } from '../actions';
import { DELETE_EVENT } from '../actions';

const events = (state = [], action) => {
	switch (action.type) {
		case CREATE_EVENT:
			const event = { title: action.title, body: action.body };
			const length = state.length;
			const id = length === 0 ? 1 : state[length - 1].id + 1;
			return [ ...state, { id, ...event } ];
		case DELETE_ALL_EVENTS:
			return [];
		case DELETE_EVENT:
			const delete_event = { id: action.id, title: action.title, body: action.body };
			const newState = state.filter((data) => data.id !== delete_event.id);
			return newState;
		default:
			return state;
	}
};

export default events;
