import styled from 'styled-components';
import variables from '../../../data/variables';

export const MainContent = styled.div`
  background-color:${variables.darkGrey};
  @media(min-width: ${variables.breakpointPhone}) {
    background: linear-gradient(to bottom,rgb(239 233 233 / 46%),transparent 22%);
  }
`