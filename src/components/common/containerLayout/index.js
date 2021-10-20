import styled from 'styled-components';
import variables from "../../../data/variables";

export const ContainerLayout = styled.div`
  width: ${variables.width};
  margin-left: auto;
  margin-right: auto;
  background-color:${variables.background};

  &.wrapper {
    max-width: ${variables.wrapperWidth};
    margin: auto;
  }
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    max-width: 75rem;
  }
  
`