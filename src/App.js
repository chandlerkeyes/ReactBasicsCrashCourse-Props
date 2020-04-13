import React from 'react';
import License from './components/greeting-card'
import './App.css';

function App() {
  const image = require('./assets/my-picture.jpg')

  return (
    <div className="App">
      <License
        image={image}
        name="Chandler Keyes"
        streetAddress="123 Sesame St."
        state="MI"
        age={20}
      />
    </div>
  );
}

export default App;
