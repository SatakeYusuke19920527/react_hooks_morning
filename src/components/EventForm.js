import React, { useState, useContext } from 'react';
import { DELETE_ALL_EVENTS } from '../actions/';
import AppContext from '../contexts/AppContext';

const EventForm = () => {
    const { state, dispatch } = useContext(AppContext);
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
  const addEvent = e => {
    e.preventDefault();

    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('本当に削除しますか？')
    if (result) {
      dispatch({
        type: DELETE_ALL_EVENTS,
      })
    } else {
      return state;
    }
  }

  const uncreatable = title === '' || body === '' ? true : false;

    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">title</label>
                    <input
                        className="form-controll"
                        id="formEventTitle"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="formEventBody">body</label>
                    <textarea
                        className="form-controll"
                        id="formEventBody"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={addEvent}
                    disabled={uncreatable}
                >イベントを作成する</button>
                <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={deleteAllEvents}
                    disabled={state.length === 0}
                >全てのイベントを削除する</button>
            </form>
        </>
    );
}

export default EventForm;