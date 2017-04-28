import React, { Component } from 'react';
import PropTypes from 'prop-types';

const baseStyle = {
  display: 'grid',
  width: '100%',
  height: '100%',
}

class Grid extends Component {
  static propTypes = {
    children: PropTypes.any,
    template: PropTypes.object,
  }

  constructor () {
    super();

    this.getStyles = this.getStyles.bind(this);
  }

  getStyles () {
    const { template } = this.props;
    
    const styles = {
      ...baseStyle,
      gridTemplateColumns: template.column,
      gridTemplateRows: template.row,
    };

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

export default Grid;