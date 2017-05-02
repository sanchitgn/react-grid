import React, { Component } from "react";
import PropTypes from "prop-types";

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
     * [string] Grid area name
     */
    name: PropTypes.string,

    /*
      * Overrides paren alignment
      */
    justifySelf: PropTypes.string,
    alignSelf: PropTypes.string
  };

  static defaulProps = {
    layout: null,
    zIndex: 1
  };

  constructor() {
    super();

    this.getStyles = this.getStyles.bind(this);
  }

  getStyles() {
    const { layout: { column, row }, zIndex } = this.props;

    const styles = {
      border: "1px solid #9e9e9e", // DEV
      gridRow: row,
      gridColumn: column,
      zIndex
    };

    return styles;
  }

  render() {
    return (
      <div style={this.getStyles()}>
        {this.props.children}
      </div>
    );
  }
}

export default Cell;
