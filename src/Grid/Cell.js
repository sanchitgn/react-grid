import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ALIGN_ITEMS_VALUES } from './constants';

const mapProperty = {
    area: 'gridArea',
    column: 'gridColumn',
    row: 'gridRow',
    colStart: 'gridColumnStart',
    colEnd: 'gridColumnEnd',
    rowStart: 'gridRowStart',
    rowEnd: 'gridRowEnd',
  };

class Cell extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /* 
     * Layout will be determined by specificity
     * [object] layout
     *   colStart, rowStart, colEnd, rowEnd
     *   column, row
     *   area
     */
    layout: PropTypes.object,
    zIndex: PropTypes.number,
    /*
     * Overrides parent alignment
     */
    justifySelf: PropTypes.oneOf(ALIGN_ITEMS_VALUES),
    alignSelf: PropTypes.oneOf(ALIGN_ITEMS_VALUES),
  };

  static defaultProps = {
    className: 'cell',
    layout: {},
    zIndex: 1,
    justifySelf: 'start',
    alignSelf: 'start',
  };

  constructor() {
    super();

    this.getStyles = this.getStyles.bind(this);
    this.getLayout = this.getLayout.bind(this);
  }

  /**
   * Defines layout based on layout prop
   * 
   * @returns layout styles
   * 
   */
  getLayout() {
    const { layout } = this.props;

    const _layout = Object.keys(layout).reduce((style, key) => {
      if(layout[key]) {
        style[mapProperty[key]] = layout[key];
      }
      return style;
    }, {});

    console.log(_layout);

    return _layout;
  }

  getStyles() {
    const { zIndex, justifySelf, alignSelf } = this.props;

    const layoutStyles = this.getLayout();

    const styles = {
      width: '100%',
      height: '100%',
      zIndex,
      justifySelf,
      alignSelf,
      ...layoutStyles,
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

export default Cell;
