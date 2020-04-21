import styled from 'styled-components'

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: ${props => props.inputColor || "Blue"};
  margin: 4em;
`;
export default Wrapper