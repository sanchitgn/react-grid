import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Grid extends Component {
  static propTypes = {
    children: PropTypes.any,
    /*
     * [object] template
     * columns, rows
     */
    template: PropTypes.object,
    /*
     * [object] gap
     * column, row
     * string
     */
    gap: PropTypes.object,
    /*
     * [string] Refer to grid-area property of children
     */
    templateAreas: PropTypes.string
  }

  static defaultProps = {
    template: {
      column: 'repeat(12, 1fr)', // 12 column grid
    },
    gap: {
      column: '4px',
      row: '8px',
    },
  }

  constructor () {
    super();

    this.getStyles = this.getStyles.bind(this);
  }

  getStyles () {
    const { template, gap } = this.props;
    
    const styles = {
      display: 'grid',
      width: '100%',
      height: '100%',
      gridTemplateColumns: template.column,
      gridTemplateRows: template.row,
      gridRowGap: gap.row,
      gridColumnGap: gap.column,
    };

    return styles;
  }

  render () {
    return (
      <div style={this.getStyles()}>
        {this.props.children}
      </div>
    );
  }
}

export default Grid;