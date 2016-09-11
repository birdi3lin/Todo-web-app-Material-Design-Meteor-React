import React from 'react';
import {mount} from 'react-mounter';

var pad0 = {
  padding: 0
};

export const Signuplayout = ({content}) => (
  <div className="row">
    <div style={pad0} className="col s12">
      {content}
    </div>
  </div>
)
