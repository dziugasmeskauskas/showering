import React, { Component } from 'react';
import logo from './logo.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropzone from 'react-dropzone'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      files: [],
      isUploading: false
    }
  }

  onDrop(files) {
    files.forEach(file => {
      console.log(file.type)
      this.setState({ isUploading: true });
      this.upload(file);
    });
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

  post = (base64, file) => {
    const url = 'https://sound-sequencer.herokuapp.com/sounds';
    const payload = {
      data: base64,
      content_type: file.type,
      filename: file.name
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"

      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if(response.ok) {
        this.setState({
          files: [ ...this.state.files, { file } ],
          isUploading: false
        })
        return;
      }
      toast.error("Upload failed !");
      this.setState({ isUploading: false })
    }
    );
  }

  render() {
    const { isUploading } = this.state;
    return (
      <div className="dropzone">
        {
          isUploading && <div className="cover">File uploading! <br/> Please wait</div>
        }
        <Dropzone onDrop={this.onDrop.bind(this)} style={{
          width: 500,
          border: '1px solid rgba(0, 0, 0, 0.5)',
          borderRadius: 11
        }}>
          <h1>Drop the sounds !</h1>
        </Dropzone>


        <h2>Dropped files</h2>
        <ul>
          {
            this.state.files.map(file => <li key={file.name}>{file.name} - {file.size} bytes <span onClick={this.delete.bind(null, id)}>Delete</span></li>)
          }
        </ul>

        <ToastContainer />
      </div>
    );
  }
}

export default App;
