import React, { Component } from 'react';
import Content from './Content';
import Showcardfilter from './Showcard/Showcardfilter';

class AppContent extends Component {
  render() {
    return (
      <div id="content">
        <Content />
        {/* <RightContentClass></RightContentClass> */}
        <Showcardfilter />
      </div>
    );
  }
}

export default AppContent; 
