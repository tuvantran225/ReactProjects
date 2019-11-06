import React from 'react';

function App() {
  return (
    <div>
      <div>

        <span>
          <label>Name</label>
          <input type="text"/>
        </span>
        <span>
          <label>Job</label>
          <input type="text"/>
        </span>
        <span>
          <label>Age</label>
          <input type="text"/>
        </span>
        <button>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frank</td>
            <td>Frank</td>
            <td>Frank</td>
            <td><button>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
