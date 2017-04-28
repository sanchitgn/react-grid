import React, { Component } from 'react';
import Grid from './Grid/Grid';
import GridItem from './Grid/GridItem';

class App extends Component {
  render() {
    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <Grid template={{ column: '20% 60% 20%', row: '20% auto' }}>
          <GridItem column='1 / 3'>Test</GridItem>
        </Grid>
      </div>
    );
  }
}

export default App;
