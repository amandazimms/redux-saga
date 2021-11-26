import React from 'react'
import { Header } from 'semantic-ui-react'

function MainHeader(props) {
  const title = props.title;
  const type = props.type || 'h1';
  
  return (
    <Header as={type}>{title}</Header>
  )
}

export default MainHeader
