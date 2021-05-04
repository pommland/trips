import React from 'react';
import Select from 'react-select';

const options = [
  { value: '0', label: 'Traveler' },
  { value: '1', label: 'Enterprise' },
];

class Selector extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
      //style={{width: `${(8*this.state.selectedOption2.length) + 100}px`}}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default Selector