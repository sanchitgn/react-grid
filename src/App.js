import React, { Component } from 'react';
import Grid from './Grid/Grid';
import GridItem from './Grid/GridItem';

class App extends Component {
  render() {
    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <Grid template={{ column: '20% 60% 20%', row: '64px auto' }}>
          <GridItem layout={{ column: '1 / 4' }}>Toolbar</GridItem>
          <GridItem layout={{ column: '1 / 2' }}>Sidebar</GridItem> 
          <GridItem layout={{ column: '2 / 4' }}>Main</GridItem>
        </Grid>
      </div>
    );
  }
}

export default App;
