/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingIndicator } from 'components/LoadingIndicator';
import { Start } from 'components/Start';
import { Game } from 'components/Game';
import styled from 'styled-components/macro';

export const Home = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)
  const coordinates = useSelector((state) => state.choices.coordinates)

  // Change background color according to where the user is in the game
  const background = () => {
    let color = '';
    switch (coordinates) {
      case '0,0':
        color = '#2C3333'; // real dark blue
        break;
      case '1,0':
        color = '#231955'; // dark navy blueish
        break;
      case '1,1':
        color = '#395B64'; // light blue grey
        break;
      case '0,1':
        color = '#395B64';
        break;
      case '0,2':
        color = '#E8AA42'; // yellowish
        break;
      case '0,3':
        color = '#FFB200'; // yellowish
        break;
      case '1,3':
        color = '#FFCB42'; // light yellow
        break;
      default: color = '#2C3333';
    }
    return color
  }

  return (
    <BackgroundColor background={background}>
      <InnerWrapper>
        {!coordinates && <Start />}
        {isLoading && <LoadingIndicator />}
        {coordinates && <Game />}
      </InnerWrapper>
    </BackgroundColor>
  )
}

// STYLING FOR ABOVE COMPONENT
const BackgroundColor = styled.section`
  background-color: ${(props) => props.background};
  width: 100%;
  min-height: 100vh;
`

const InnerWrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`