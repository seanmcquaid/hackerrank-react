import React from 'react';

class TextEditor extends React.Component {
  state = {
    wordInputText: '',
    appendedWords: [],
  };

  wordInputOnChange = (event) => {
    this.setState({
      ...this.state,
      wordInputText: event.target.value,
    });
  };

  appendButtonOnClick = () => {
    this.setState({
      ...this.state,
      appendedWords: [...this.state.appendedWords, this.state.wordInputText],
      wordInputText: '',
    });
  };

  undoButtonOnClick = () => {
    this.setState({
      ...this.state,
      appendedWords: this.state.appendedWords.splice(
        0,
        this.state.appendedWords.length - 1
      ),
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className='controls'>
          <input
            className='word-input'
            type='text'
            data-testid='word-input'
            value={this.state.wordInputText}
            onChange={this.wordInputOnChange}
          />
          <button
            data-testid='append-button'
            disabled={this.state.wordInputText.length === 0}
            onClick={this.appendButtonOnClick}
          >
            Append
          </button>
          <button
            data-testid='undo-button'
            disabled={this.state.appendedWords.length === 0}
            onClick={this.undoButtonOnClick}
          >
            Undo
          </button>
        </div>
        <div className='text-field' data-testid='text-field'>
          {this.state.appendedWords.length > 0
            ? this.state.appendedWords.reduce((prev, curr) => prev + ' ' + curr)
            : ''}
        </div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
