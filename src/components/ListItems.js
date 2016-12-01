
import React, { Component } from 'react';
import NewItemBox from './NewItemBox';

export default class ListItems extends Component {

  render() {
    var self = this;

    return <div>
        <div className="row">
          <div className="small-12">
            <ul>
            {
                self.props.items.map( (item, key) =>
                  <li key={item.key}> {item.value} </li>
                )
            }
            </ul>
          </div>
        </div>
      </div>
  }

}
