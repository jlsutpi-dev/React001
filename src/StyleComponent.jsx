import React from "react";
import styled from "styled-components";

const StyleComponent = () => {
  // Use PascalCase for styled components
  const StyledDiv = styled.div`
    color: white;
    background-color: darkblue; /* Fixed typo */
    padding: 10px;
    border-radius: 5px;
  `;

  return <StyledDiv>Hello Styled Component</StyledDiv>;
};

export default StyleComponent;
