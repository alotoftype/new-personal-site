import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 0.5em;
  margin: 0 1 em;
`

const Copywright = styled.p`
  display: block;
  margin: 0 auto;
  text-align: center;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
`

const Footer = ({ author, copywright }) => (
  <Wrapper>
    <List>
      <Item>
        <a href={author.github_url} target="_blank" rel="noopener noreferrer">
          {author.github_name}
        </a>
      </Item>
      <Item>
        <a href={author.dribble_url}>dribble</a>
      </Item>
      <Item>
        <a href={author.instagram}>instagram</a>
      </Item>
    </List>
    <Copywright>{copywright}</Copywright>
  </Wrapper>
)

export default Footer
