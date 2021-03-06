'use strict';

import React from 'react';


export default class VersionForm extends React.PureComponent {
  render() {
    return (
      <form className="form-inline">
        <select disabled className="form-control" value={this.props.version} name="version" onChange={this.handleInputChange}>
          <option value={20400}>2.4.x</option>
        </select>
      </form>
    );
  }


  handleInputChange = event => {
    this.props.update({ version: +event.target.value });
  };
}
