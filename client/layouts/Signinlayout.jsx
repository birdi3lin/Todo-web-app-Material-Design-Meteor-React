import React from 'react';
import ReactDOM from 'react-dom';

var pad0 = {
  padding: 0
};

export const Signinlayout = ({content}) => (
  <div className="row">
    <div style={pad0} className="col s12">
      {content}
    </div>
  </div>
)
