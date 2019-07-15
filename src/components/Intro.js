import React from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.section`
    max-width: 1280rem;
    margin: 0 auto;
    text-align: center;
`
const Intro = props => (
  <>
    <Wrapper>
      <p>A place where I share more about my journey as a developer. </p>
    </Wrapper>
  </>
)

export default Intro
