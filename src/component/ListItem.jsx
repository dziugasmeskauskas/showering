import React, { Component } from 'react'
import './ListItem.scss'

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'view',
      value: this.props.file.attributes.data.name || ''
    }
  }

  changeMode = mode => this.setState({ mode })

  update = async () => {
    await this.props.onUpdate(this.props.file.id, this.state.value)
    this.view()
  }

  edit = () => this.changeMode('edit')

  view = () => this.changeMode('view')

  delete = () => this.props.onDelete(this.props.file.id)

  render() {
    const { mode, value } = this.state
    const { file } = this.props

    return (
      mode === 'view'
      ? <li>
          <div className="info">
            <span>Name: {file.attributes.data.name}</span>
            <small>File name: {file.attributes.filename}</small>
          </div>
          <div className="actions">
            <button onClick={this.edit}>Edit</button>
            <button onClick={this.delete}>Delete</button>
          </div>
        </li>
      : <li>
          <div>
            <span>Name: </span><input type="text" value={value} onChange={({ target: { value }}) => this.setState({ value: value })} />
          </div>
          <div className="actions">
            <button onClick={this.update}>Save</button>
            <button onClick={this.view}>Cancel</button>
          </div>
        </li>
    )
  }
}

export default ListItem
