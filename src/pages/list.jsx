import React from "react"
import Aboutpage from './about.jsx'

function List(props) {
    return (
        <div>
       <Aboutpage titleProp = "It's about you" />
       <Aboutpage titleProp = "Who are you" />
       <Aboutpage titleProp = "That's incredible" />
       <Aboutpage titleProp = "How consistent" />
       </div>

    )
  }

export default List