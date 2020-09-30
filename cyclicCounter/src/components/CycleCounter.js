import React from 'react';

class CycleCounter extends React.Component {
  state = {
    count: 0,
  };

  buttonOnClick = () => {
    this.setState({
      ...this.state,
      count:
        this.state.count + 1 === this.props.cycle ? 0 : this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className='layout-column align-items-center mt-50'>
        <section className='pt-20 layout-row align-items-center justify-content-center'>
          <button
            data-testid='cycle-counter'
            style={{ fontSize: '1rem', width: 120, height: 30 }}
            onClick={this.buttonOnClick}
          >
            {count}
          </button>
        </section>
      </div>
    );
  }
}

export default CycleCounter;
