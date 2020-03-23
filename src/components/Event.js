import React, { useContext } from 'react';
import { DELETE_EVENT, ADD_OPERATION_LOG } from '../actions/';
import AppContext from '../contexts/AppContext';
import { timeCurrentISO8601 } from '../utils';

const Event = ({ event }) => {
	const { dispatch } = useContext(AppContext);
	const time = timeCurrentISO8601();
	const handleClickDelete = () => {
		const result = window.confirm(`id=${event.id}を削除しますか？`);
		if (result) {
			dispatch({
				type: DELETE_EVENT,
				id: event.id,
				title: event.title,
				body: event.body
			});
			dispatch({
				type: ADD_OPERATION_LOG,
				description: `id=${event.id}のイベントを削除しました。`,
				operationAt: time
			});
		} else {
			return event;
		}
	};

	return (
		<tr>
			<td>{event.id}</td>
			<td>{event.title}</td>
			<td>{event.body}</td>
			<td>
				<button type="button" className="btn btn-danger" onClick={handleClickDelete}>
					削除
				</button>
			</td>
		</tr>
	);
};

export default Event;
