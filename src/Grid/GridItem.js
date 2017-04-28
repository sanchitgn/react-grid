import React, { Component } from 'react';
import PropTypes from 'prop-types';


class GridItem extends Component {
  static propTypes = {
    children: PropTypes.any,
    column: PropTypes.string,
    row: PropTypes.string,
  }

  constructor () {
    super();

    this.getStyles = this.getStyles.bind(this);
  }

  getStyles () {
    const { column, row } = this.props;

    const styles = {
      border: '1px solid #9e9e9e',
      gridRow: row,
      gridColumn: column,
    }

    return styles;
  }

  render () {
    return (
      <div style={this.getStyles()} {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default GridItem;