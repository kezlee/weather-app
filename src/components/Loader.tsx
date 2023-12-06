import React from 'react';
import styled from "styled-components";

const LoaderContainer = styled.div`
  border: 4px solid transparent;
  border-top-color: #fff;
  border-radius: 50%;
  animation: 1s loader linear infinite;
	width: 35px;
	height: 35px;
	transform: translate(-50%, -50%);

  &:before {
    content: "";
    display: block;
    width: inherit;
    height: inherit;
    position: absolute;
    top: -4px;
    left: -4px;
    border: 4px solid #ccc;
    border-radius: 50%;
    opacity: 0.5;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return <LoaderContainer></LoaderContainer>;
};

export default Loader;
