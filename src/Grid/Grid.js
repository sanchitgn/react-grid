import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  GLOBAL_CSS_VALUES,
  ALIGN_ITEMS_VALUES,
  ALIGN_CONTENT_VALUES,
} from './constants';

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
      ...GLOBAL_CSS_VALUES,
    ]),
    /*
     * Defines minimum row, column sizes
     */
    autoRows: PropTypes.string,
    autoColumns: PropTypes.string,
    /*
     * Defines children alignment
     */
    justifyContent: PropTypes.oneOf(ALIGN_CONTENT_VALUES),
    justifyItems: PropTypes.oneOf(ALIGN_ITEMS_VALUES),
    alignContent: PropTypes.oneOf(ALIGN_CONTENT_VALUES),
    alignItems: PropTypes.oneOf(ALIGN_ITEMS_VALUES),
  };

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
    justifyContent: 'start',
    justifyItems: 'start',
    alignContent: 'start',
    alignItems: 'start',
  };

  constructor() {
    super();

    this.getStyles = this.getStyles.bind(this);
  }

  getStyles() {
    const {
      template,
      gap,
      justifyContent,
      justifyItems,
      alignContent,
      alignItems,
      autoFlow,
      autoRows,
      autoColumns,
    } = this.props;

    const styles = {
      display: 'grid',
      width: '100%',
      height: '100%',
      justifyContent,
      justifyItems,
      alignContent,
      alignItems,
      gridTemplateColumns: template.column,
      gridTemplateRows: template.row,
      gridRowGap: gap.row,
      gridColumnGap: gap.column,
      gridAutoFlow: autoFlow,
      gridAutoColumns: autoColumns,
      gridAutoRows: autoRows,
    };

    return styles;
  }

  render() {
    const { className, children } = this.props;

    return (
      <div className={className} style={this.getStyles()}>
        {children}
      </div>
    );
  }
}

export default Grid;
