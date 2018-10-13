import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropzone from 'react-dropzone'
import soundService from './soundsService';
import ListItem from './component/list-item';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.service = new soundService();
    this.state = {
      files: [],
      isUploading: false
    }
  }

  onDrop(files) {
    files.forEach(file => {
      this.setState({ isUploading: true });
      this.upload(file);
    });
  }

  componentDidMount() {
    this.getItems();
  }

  upload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.post(reader.result, file);
    };
    reader.onerror = () => {
      this.setState({ isUploading: false })
    };
  }

  getItems = () => {
    this.service.get().then(response => response.json())
    .then(({ data }) => {
      this.setState({files: data})
      console.log(this.state);
    })
  }

  post = (base64, file) => {
    const payload = {
      sound: {
        data: base64,
        content_type: file.type,
        filename: file.name
      }
    };

    this.service.post(payload).then(response => {
      if(response.ok) {
        this.setState({ isUploading: false });
        return this.getItems();
      }
      toast.error("Upload failed !");
      this.setState({ isUploading: false })
    });
  }

  delete = id => {
    this.service.delete(id).then(response => {
      if(response.ok) {
        return this.getItems();
      }
      toast.error("Delete failed !");
    });
  }

  update = (id, name) => {
    const payload = {
      sound: {
        data: {
          name: name
        }
      }
    }
    this.service.update(id, payload).then(response => {
      if(response.ok) {
        return this.getItems();
      }
      toast.error("Update failed !");
    });
  }

  render() {
    const { isUploading } = this.state;
    return (
      <div className="dropzone">
        {
          isUploading && <div className="cover">File uploading! <br/> Please wait</div>
        }
        <Dropzone onDrop={this.onDrop.bind(this)}
          style={{
            width: 500,
            border: '1px solid rgba(0, 0, 0, 0.5)',
            borderRadius: 11
          }}>
          <h1>Drop the sounds !</h1>
        </Dropzone>


        <h2>Dropped files</h2>
        <ul>
          {
            this.state.files.map(file => <ListItem key={file.id} file={file} onDelete={this.delete} onUpdate={this.update} />)
          }
        </ul>

        <ToastContainer />
      </div>
    );
  }
}

export default App;
