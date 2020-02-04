import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPink: false
    };

    this.toggleIsPink = this.toggleIsPink.bind(this);
  }

  toggleIsPink() {
    this.setState({
      isPink: !this.state.isPink
    });
  }

  render() {
    let btnClass = '';

    if(this.state.isPink) {
      btnClass = 'hotpink';
    } else {
      btnClass = 'green';
    }

    return <button onClick={this.toggleIsPink} className={`btn ${btnClass}`}>Click Me</button>;
  }
}

export default Button;
