import React from 'react';
import styled, { css } from 'styled-components';
import NavBar from './navbar';
import Creator from './creator';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Div>
        <Div>
          <NavBar />
        </Div>
        <Div projectInformation>
          <Creator />
        </Div>
      </Div>
    );
  }
}

const Div = styled.div`
  ${props => props.projectInformation && css`
    width: 60%;
    height: 50%;
    background-color: transparent;
    margin: auto;
  `}
`;

module.exports = App;
