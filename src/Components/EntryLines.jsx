import React from 'react'
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';

function EntryLines(props) {
  const entries = props.entries;
  const editEntry = props.editEntry;

  return (
    <Container>
    {entries.map( entry => (
      <EntryLine key={entry.id} entry={entry}/>
    ))}
    </Container>
  )
}

export default EntryLines
