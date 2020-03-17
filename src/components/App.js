import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => {

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">title</label>
          <input
            className="form-controll"
            id="formEventTitle"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">body</label>
          <textarea
            className="form-controll"
            id="formEventBody"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">イベントを作成する</button>
        <button type="submit" className="btn btn-danger">全てのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">TITLE</th>
            <th scope="col">BODY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

App.defaultProps = {
  name: null,
  price: 1000
}

export default App
