import { useState } from 'react';
import './App.css';
import Photos from './components/Photos';

function App() {
  const [photo, setPhoto] = useState([])

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .then((result) => {
      return result.json();
    })
    .then((data) => setPhoto(data))


  

  return (
    <div className='App'>
      {photo.map((el) => (
        <Photos id={el.id} title={el.title} thumbnailUrl={el.thumbnailUrl}/>
      ))}
    </div>
  );
}

export default App;
