import React from 'react';
import './App.scss';

export default function(props) {
  return (
    <div className="App">
      {props.children}
    </div>
  );
}