import React, {useReducer} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from "../reducers/";
import Events from './Events';
import EventForm from './EventForm';
import AppContext from '../contexts/AppContext';

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  
  console.log(AppContext, 'in App.js')

  return (
    <AppContext.Provider value={'hello i am a provider'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
}

export default App
