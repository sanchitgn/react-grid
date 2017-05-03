import React, { Component } from 'react';
import { Grid, Cell } from './Grid';

const Content = ({ children }) => (
  <div style={{ 
    width: '100%',
    height: '100%',
    border: '1px solid #9e9e9e'
    }}>
    {children}
  </div>
)

class App extends Component {
  render() {
    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <Grid template={{ column: '20% 60% 20%', row: '64px 1fr' }}>
          <Cell layout={{ column: '1 / 4' }}><Content>Toolbar</Content></Cell>
          <Cell layout={{ column: '1 / 2' }}><Content>Sidebar</Content></Cell> 
          <Cell layout={{ column: '2 / 4' }}><Content>Main</Content></Cell>
        </Grid>
      </div>
    );
  }
}

export default App;
