/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return isLoading && <LoadingWrap>Loading..<Loader /></LoadingWrap>
}

// STYLING FOR ABOVE COMPONENT
const LoadingWrap = styled.div`
  min-height: 100vh;
  padding-top: 3rem;
  font-family: 'Orbitron', sans-serif;
  color: white;
  font-size: 25px;
  font-weight: bold;
`

const Loader = styled.div`
  margin-top: 5rem;
  border-radius: 20%;
  border-top: 14px ridge lightgray;
  border-bottom: 14px ridge lightgray;
  width: 100px;
  height: 150px;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

 @-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

 @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`