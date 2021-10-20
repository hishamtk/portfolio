import styled from "styled-components";
import colors from "../../../data/variables";

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #0074d9;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;



export const ButtonDefault = styled.a`
  cursor: pointer;
  margin: 10% 0%;
  font-family: "GT-Walsheim-Pro-Medium";
  font-size: inherit;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration:none;
  border: 4px solid ${colors.primary};
  color: ${colors.primary};
  background: #fff;
  outline: none;
  position: relative;
  display: inline-block;
  padding: 15px 10px 14px;
  cursor: pointer;
  width: auto;
  min-width:200px;
  &::after {
    min-width:200px;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid ${colors.primary};
    background-color: ${colors.primary};
    left: 4px;
    top: 9px;
    z-index: -1;
    content: '';
    transition: all 0.5s;
  }
  &:hover:after {
    top: 0px;
    left: -4px;
  }
`;

export const ReadMore = styled.span`
  color: #000;
  font-size: 1rem;
  text-transform: inherit;
  letter-spacing: .7px;
  font-family: "GT-Walsheim-Pro-Medium";
  &:hover {
    color: ${colors.primary};
  }
  &:after {
    bottom: 1px;
    height: 3px;
    background: ${colors.primary};
  }
`

export const ResumeButton = styled.a`
  color: #000;
  font-size: 1rem;
  letter-spacing: 2px;
  font-family: "GT-Walsheim-Pro-Medium";
  border: 5px solid #e8e7e7;
  display: block;
  margin: 6rem 0 2rem 0;
  padding: 2rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: .5rem;
  transition: color 300ms ease-in-out, border-color 400ms ease-in-out;
  &:hover {
    color: ${colors.primary};
    border-color: ${colors.primary}
  }
`