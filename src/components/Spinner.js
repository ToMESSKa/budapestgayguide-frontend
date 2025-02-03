import React from 'react';
import { TailSpin } from 'react-loader-spinner'; // Assuming you're using this package for the spinner

const Spinner = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    paddingTop: '10rem',
    height: "100vh"
  }}>
    <TailSpin color='red'/>
  </div>
);

export default Spinner;