import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';
import Cell from './Cell';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Grid template={{ column: '1fr', row: '1fr' }}>
      <Cell layout={{ column: '1' }}>App</Cell>
    </Grid>,
    div
  );
});
