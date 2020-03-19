import React from 'react';

const Event = ({event,dispatch}) => {

    const handleClickDelete = () => {

        const result = window.confirm(`id=${event.id}を削除しますか？`)

        if (result) {
            dispatch({
            type: 'DELETE_EVENT',
            id: event.id,
            title: event.title,
            body: event.body
        })   
        } else {
            return event;
        }
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