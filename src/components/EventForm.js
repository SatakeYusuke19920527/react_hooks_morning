import React, { useState, useContext } from 'react';
import { DELETE_ALL_EVENTS, ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions/';
import AppContext from '../contexts/AppContext';
import { timeCurrentISO8601 } from '../utils';

const EventForm = () => {
	const { state, dispatch } = useContext(AppContext);
	const [ title, setTitle ] = useState('');
	const [ body, setBody ] = useState('');

	const time = timeCurrentISO8601();

	const addEvent = (e) => {
		e.preventDefault();

		dispatch({
			type: 'CREATE_EVENT',
			title,
			body
		});

		dispatch({
			type: ADD_OPERATION_LOG,
			description: 'イベントを作成しました。',
			operationAt: time
		});
		setTitle('');
		setBody('');
	};

	const deleteAllEvents = (e) => {
		e.preventDefault();
		const result = window.confirm('本当に削除しますか？');
		if (result) {
			dispatch({
				type: DELETE_ALL_EVENTS
			});

			dispatch({
				type: ADD_OPERATION_LOG,
				description: '全てのイベントを削除しました。',
				operationAt: time
			});
		} else {
			return state.events;
		}
	};

	const deleteAllOperationLogs = (e) => {
		e.preventDefault();
		const result = window.confirm('全ての操作ログを削除しますか？');

		if (result) {
			dispatch({
				type: DELETE_ALL_OPERATION_LOGS
			});
		} else {
		}
	};

	const uncreatable = title === '' || body === '' ? true : false;

	return (
		<React.Fragment>
			<h4>イベント作成フォーム</h4>
			<form>
				<div className="form-group">
					<label htmlFor="formEventTitle">title</label>
					<input
						className="form-controll"
						id="formEventTitle"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="formEventBody">body</label>
					<textarea
						className="form-controll"
						id="formEventBody"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
				</div>

				<button type="submit" className="btn btn-primary" onClick={addEvent} disabled={uncreatable}>
					イベントを作成する
				</button>
				<button
					type="submit"
					className="btn btn-danger"
					onClick={deleteAllEvents}
					disabled={state.events.length === 0}
				>
					全てのイベントを削除する
				</button>

				<button
					type="submit"
					className="btn btn-danger"
					onClick={deleteAllOperationLogs}
					disabled={state.operationLogs.length === 0}
				>
					全ての操作ログを削除する
				</button>
			</form>
		</React.Fragment>
	);
};

export default EventForm;
