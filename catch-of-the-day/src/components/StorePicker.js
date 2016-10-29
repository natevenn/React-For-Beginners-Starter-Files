import React from 'react';
import helpers from '../helpers';

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
  }
  render() {
  console.log(helpers)
    return (
      <form className="store-selector" >
        <h2>Please visit a Store</h2>
        <input type='text' required placeholder='Store Name' />
        <button type='submit' onClick={this.goToStore}>Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;
