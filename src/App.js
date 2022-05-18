import './App.css';
import contacts from './contacts.json'
import { useState } from 'react'



function App() {
  const [contact, setContact] = useState(contacts.slice(0, 5))

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th></tr>
        </thead>
        <tbody>
          {contact.map((el) => {
            return (
              <tr>
                <td><img className='picture' src={el.pictureUrl} /></td>
                <td>{el.name}</td>
                <td>{el.popularity.toFixed(2)}</td>
              </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
