import React from 'react'
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';

function EntryLines(props) {
  const entries = props.entries;
  const deleteEntry = props.deleteEntry;

  return (
    <Container>
    {entries.map( entry => (
      <EntryLine 
        key={entry.id}
        entry={entry}
        deleteEntry={deleteEntry}
      />
    ))}
    </Container>
  )
}

export default EntryLines
