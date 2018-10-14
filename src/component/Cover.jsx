import React from 'react';
import { ScaleLoader } from 'react-spinners';
import './Cover.scss';

const Cover = ({ loading }) => (
  <div className={`cover ${loading ? 'show' : ''}`}>
    <span className="text"> File uploading! <br/> Please wait</span>
    <ScaleLoader
      sizeUnit={"px"}
      size={400}
      color={'white'}
      loading={true}
    />
  </div>
);

export default Cover;