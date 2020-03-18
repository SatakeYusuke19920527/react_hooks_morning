import React from 'react';

const Event = ({event,dispatch}) => {

    const handleClickDelete = () => {
        dispatch({
            type: 'DELETE_EVENT',
            id: event.id,
            title: event.title,
            body: event.body
        })
    }

    return (
        <tr>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleClickDelete}
                >削除</button>
            </td>
        </tr>
    );
}

export default Event;