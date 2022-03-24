import React from 'react';
import {Circles} from 'react-loader-spinner';

import './Spinner.css';

export const Spinner = ({message}) => {
  return (
    <div className="spinner">
      <Circles
        color="#989AF3"
        height={30}
        width={40}
      />

      <p className="spinner--message">{message}</p>
    </div>  )
}
