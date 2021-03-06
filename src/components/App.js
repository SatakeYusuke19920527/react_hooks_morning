import React, { useReducer } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/';
import Events from './Events';
import EventForm from './EventForm';
import AppContext from '../contexts/AppContext';
import OperationLogs from './OperationLogs';

const App = () => {
	const initialState = {
		operationLogs: [],
		events: []
	};
	const [ state, dispatch ] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<div className="container-fluid">
				<EventForm />
				<Events />
				<OperationLogs />
			</div>
		</AppContext.Provider>
	);
};

export default App;
