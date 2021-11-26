import React from 'react'
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';

function EntryLines(props) {
  const entries = props.entries;

  return (
    <Container>
    {entries.map( entry => (
      <EntryLine 
        description={entry.description} 
        amount={entry.amount} 
        isExpense={entry.isExpense}/>
    ))}
    </Container>
  )
}

export default EntryLines
