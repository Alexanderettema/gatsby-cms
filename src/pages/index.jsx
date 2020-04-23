import React from "react"
import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: FloralWhite;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: ${props => props.inputColor || "Coral"};
  margin: 4em;
`;

function AboutPage(props) {
  return (
      <Wrapper inputColor = "Coral">
    <Title>{props.titleProp}</Title>
    </Wrapper>
  )
}

function AboutMe (){
  return (
    <AboutPage titleProp = "This is about me"></AboutPage>
  )
}

export default AboutMe