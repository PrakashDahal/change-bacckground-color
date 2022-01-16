import React, { useState } from 'react';
import './App.css';
// import ColorPicker from './colorPicker';

function App() {

  const [state, updateState] = useState('#FFFFFF');

  const handleInput = (e) => {
    updateState(e.target.value);
  }

  function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  }

  const getInvertColor = (hex, bw) => {
    if (hex.length == 4 || hex.length == 7) {
      if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
      }
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
      }
      var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
      if (bw) {
        // https://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
          ? '#000000'
          : '#FFFFFF';
      }
      // invert color components
      r = (255 - r).toString(16);
      g = (255 - g).toString(16);
      b = (255 - b).toString(16);

      // pad each with zeros and return
      return "#" + padZero(r) + padZero(g) + padZero(b);
    }
  }

  return <div>
    <div className='header'>
      <input type='color' onChange={handleInput} value={state} className='m-2' />
      <input type='text' value={state} onChange={handleInput} />
    </div>

    <section>
      <div className="set">
        <div><img src="./images/leaves1.png" /></div>
        <div><img src="./images/leaves2.png" /></div>
        <div><img src="./images/leaves3.png" /></div>
        <div><img src="./images/leaves4.png" /></div>
        <div><img src="./images/leaves1.png" /></div>
        <div><img src="./images/leaves2.png" /></div>
        <div><img src="./images/leaves3.png" /></div>
        <div><img src="./images/leaves4.png" /></div>
      </div>
      <div className="set set2">
        <div><img src="./images/leaves1.png" /></div>
        <div><img src="./images/leaves2.png" /></div>
        <div><img src="./images/leaves3.png" /></div>
        <div><img src="./images/leaves4.png" /></div>
        <div><img src="./images/leaves1.png" /></div>
        <div><img src="./images/leaves2.png" /></div>
        <div><img src="./images/leaves3.png" /></div>
        <div><img src="./images/leaves4.png" /></div>
      </div>
      <div className="set set3">
        <div><img src="./images/leaves1.png" /></div>
        <div><img src="./images/leaves2.png" /></div>
        <div><img src="./images/leaves3.png" /></div>
        <div><img src="./images/leaves4.png" /></div>
        <div><img src="./images/leaves1.png" /></div>
        <div><img src="./images/leaves2.png" /></div>
        <div><img src="./images/leaves3.png" /></div>
        <div><img src="./images/leaves4.png" /></div>
      </div>
      
    <div style={{ backgroundColor: state }} className='innerDiv'>
      <div style={{ textAlign: 'center' }}>
        <h1 className='mt-3' style={{ color: getInvertColor(state) }}>Hello Friends</h1>
        <p className='mt-3' style={{ color: getInvertColor(state) }}>
          This is a contrast text.
        </p>
      </div>
    </div>
    </section>
  </div>


  {/* Can create new component */ }
  {/* <ColorPicker value={state} onChange={handleInput} /> */ }




}

export default App;
