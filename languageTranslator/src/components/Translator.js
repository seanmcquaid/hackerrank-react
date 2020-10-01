import React from 'react';

class Translator extends React.Component {
  state = {
    inputText: '',
    outputText: '',
  };

  inputTextOnChange = (event) => {
    this.setState({
      ...this.state,
      inputText: event.target.value,
      outputText: '',
    });

    if (this.props.translations.get(event.target.value)) {
      this.setState({
        ...this.state,
        outputText: this.props.translations.get(event.target.value),
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className='controls'>
          <div className='input-container'>
            <span>input:</span>
            <input
              type='text'
              className='text-input'
              data-testid='text-input'
              onChange={this.inputTextOnChange}
              value={this.state.inputText}
            />
          </div>
          <div className='input-container'>
            <span>output:</span>
            <input
              type='text'
              className='text-output'
              data-testid='text-output'
              value={this.state.outputText}
              readOnly
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
