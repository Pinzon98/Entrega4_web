import { Card } from './components/Card';
import './custom.scss';
import React, {useState, useEffect} from 'react';

function App() {

  let [characters, setCharacter] = useState(null)
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => setCharacter(data.results))
  },[])
  return(
    <div>
      <div className = "header">
        <h3>ISIS3710</h3>
        <h4>Gallery</h4>
        <h4 className = "grisClaro">Counter</h4>
      </div>
      <div className="container-fluid">
        <div className = "row">
          {characters && characters.map((element) => (
            <div className = "gallery_product col-lg-2 col-md-4 col-sm-4 col-xs-6 filter hdpe">
              <Card
                key={element.id}
                img={element.image}
                name={element.name}
                gender={element.gender}
                status={element.status}
              />
            </div>))}
        </div>
      </div>
    </div>
  );
}

export default App;
