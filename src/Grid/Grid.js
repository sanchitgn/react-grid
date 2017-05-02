import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GLOBAL_CSS_VALUES, ALIGN_VALUES, SPACE_VALUES } from './constants';

class Grid extends Component {
  static propTypes = {
    children: PropTypes.node,

    className: PropTypes.string,
    
    /*
     * { columns, rows }
     */
    template: PropTypes.object,
    
    /*
     * { column, row }
     */
    gap: PropTypes.object,
    
    /*
     * Refer to grid-area property of children
     */
    templateAreas: PropTypes.string,
    
    /*
     * Controls how auto-placement algorithm works
     */
    autoFlow: PropTypes.oneOf([
      'row',
      'column',
      'dense',
      'row dense',
      'column dense',
      ...GLOBAL_CSS_VALUES
    ]),

    /*
     * Sets minimum row, column sizes
     */
    autoRows: PropTypes.string,
    autoColumns: PropTypes.string,

    /*
     * Sets children alignment
     */
    justifyContent: PropTypes.oneOf([
      ...ALIGN_VALUES,
      ...SPACE_VALUES,
    ]),
    justifyItems: PropTypes.oneOf(ALIGN_VALUES),
    alignContent: PropTypes.oneOf([
      ...ALIGN_VALUES,
      ...SPACE_VALUES,
    ]),
    alignItems: PropTypes.oneOf(ALIGN_VALUES),
  }

  static defaultProps = {
    className: 'grid',
    /*
     * Defaults to 12 column grid
     */
    template: {
      column: 'repeat(12, 1fr)',
    },
    autoFlow: 'row',
    gap: {},
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