import React from 'react';

const firstChildStyling = {
  display: 'block',
  marginLeft: '10rem',
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#13576F'
}

const lastChildStyling = {
  color: '#13576F',
  fontWeight: 'bold',
  marginRight: '1rem'
}

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isUserLoggedIn: false };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <ul className="nav">
            <li><a style={firstChildStyling} href="/" className="logo">TOKRIT</a></li>
            <li className="navbar-item"><a href="/announcement">ANNOUNCEMENT</a></li>
            <li className="navbar-item"><a href="/about">ABOUT US</a></li>
            <li className="navbar-item">
              <a href="/login" style={lastChildStyling}>
                <i className = "far fa-user-circle" />
              </a>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <div></div>
    );
  }
}

export default Navigation;
