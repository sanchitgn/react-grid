import React, { Component } from 'react';
import { Grid, Cell } from './Grid';

class App extends Component {
  render() {
    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <Grid template={{ column: '20% 60% 20%', row: '64px auto' }}>
          <Cell layout={{ column: '1 / 4' }}>Toolbar</Cell>
          <Cell layout={{ column: '1 / 2' }}>Sidebar</Cell> 
          <Cell layout={{ column: '2 / 4' }}>Main</Cell>
        </Grid>
      </div>
    );
  }
}

export default App;
