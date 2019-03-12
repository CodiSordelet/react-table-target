import React, { Component } from 'react';
import TargetTable from './TargetTable/TargetTable';

class App extends Component {



  render() {
    return (
      <div className="App">

      <div className='container-fluid'>
      <TargetTable className="container table"/>
      </div>
       
      </div>
    );
  }
}

export default App;
