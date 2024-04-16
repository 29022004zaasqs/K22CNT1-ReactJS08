import React, { Component } from 'react';
import NMH_EventForm1 from './components/NMH_EventForm1';
import NMH_EventForm2 from './components/NMH_EventForm2';
import NMH_EventForm3 from './components/NMH_EventForm3';
import NMH_EventForm4 from './components/NMH_EventForm4';

class App extends Component {
  render() {
    return (
      <div className='container'>
          <h1>Event Form Demo</h1>
          <NMH_EventForm1 />
          <NMH_EventForm2 />
          <NMH_EventForm3 />
          <NMH_EventForm4 name="Chung Trịnh Văn" />
      </div>
    );
  }
}

export default App;