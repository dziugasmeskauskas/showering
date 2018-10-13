import React, { Component } from 'react';
import { toast } from 'react-toastify';

import './list-item.css';

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'view',
      value: this.props.file.attributes.data.name || ''
    }
  }



  changeMode = mode => this.setState({ mode });

  update = async  () => {
    await this.props.onUpdate(this.props.file.id, this.state.value);
    this.view();
  }

  edit = () => this.changeMode('edit')

  view = () => this.changeMode('view')

  delete = id => this.props.onDelete(id);

  render() {
    return (
      this.state.mode === 'view' ?
      <li>
        <div>
          {this.props.file.id}
          {this.props.file.attributes.data.name}
        </div>
        <div>
          <span onClick={this.edit}>Edit</span>
          <span onClick={this.delete.bind(null, this.props.file.id)}>Delete</span>
        </div>
      </li>
      : <li>
          <input type="text" onChange={({ target: { value }}) => this.setState({ value: value })} />
          <span onClick={this.update}>save</span>
          <span onClick={this.view}>ABORT NX</span>
        </li>
    );
  }
}

export default ListItem;
