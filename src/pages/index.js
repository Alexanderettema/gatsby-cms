import React from "react"
import Title from "./title"
import Wrapper from "./wrapper"

function SectionOne(props) {
    return (
        <Wrapper inputColor = "HotPink">
        <Title inputColor = "FloralWhite" >Stay inspired, stay healthy</Title>
        </Wrapper>

    )
  }

  function SectionTwo(props) {
    return (
        <Wrapper inputColor = "Grey">
        <Title inputColor = "HotPink" >Stay inspired, stay healthy</Title>
        </Wrapper>

    )
  }

export default () => (
  <div>
      <Wrapper inputColor = "HotPink">
     <Title inputColor = "FloralWhite" >Stay inspired, stay healthy</Title>
     </Wrapper>

     <Wrapper inputColor = "Grey">
     <Title inputColor = "HotPink" >Stay inspired, stay healthy</Title>
     </Wrapper>

     <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
  </div>
)
