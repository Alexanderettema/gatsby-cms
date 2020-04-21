import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: ${props => props.inputColor || "Blue"};
`;
export default Title