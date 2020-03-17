const CREATE_EVENT = 'CREATE_EVENT';
const DELETE_EVENTS = 'DELETE_EVENTS';
const DELETE_EVENT = 'DELETE_EVENT';

const initialState = [];

const events = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EVENT:
            const event = { title: action.title, body: action.body }
            const length = state.length

            const id = length === 0 ? 1 : state[length-1].id + 1

            return [...state, {id, ...event}];
        case DELETE_EVENTS:
            return [];
        case DELETE_EVENT:
            return state;
        default:
            return state;
    }

}

export default events;