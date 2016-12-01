
import React, { Component } from 'react';

export default class NewItemBox extends Component{
  render() {
    return <div>
      <div className="row">
        <div className="small-12 column small-centered">
          <input type="text" className="text-center" id="itemInput" />
        </div>
      </div>
      <div className="row">
        <div className="small-12 text-center column ">
          <button className="large primary button" onClick={this.props.handleSubmit}> Push it! </button>
        </div>
      </div>
    </div>
  }
}
